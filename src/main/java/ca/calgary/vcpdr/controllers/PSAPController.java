package ca.calgary.vcpdr.controllers;

import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterial;
import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.personnal.telephone.Telephone;
import ca.calgary.vcpdr.data.personnal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformationService;
import ca.calgary.vcpdr.data.property.Property;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.keyholder.KeyholderService;
import ca.calgary.vcpdr.data.user.UserService;
import ca.calgary.vcpdr.data.vehicle.Vehicle;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import ca.calgary.vcpdr.search.*;
import ca.calgary.vcpdr.search.psap.PSAPUser;
import ca.calgary.vcpdr.search.psap.PSAPUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(path = "api/psap/v1")
@CrossOrigin(origins = {"*"})
public class PSAPController {

    private final UserService userService;
    private final HazardousMaterialService hazardousMaterialsService;
    private final PropertyService propertiesService;
    private final MedicalInformationService medicalInformationService;
    private final MedicalConditionService medicalConditionService;
    private final PrescribedMedicationService prescribedMedicationService;
    private final PersonService personService;
    private final EmergencyContactService emergencyContactService;
    private final TelephoneService telephoneService;
    private final VehicleService vehicleService;
    private final VulnerablePersonInformationService vulnerablePersonInformationService;
    private final KeyholderService keyholderService;
    private final PSAPUserService psapUserService;

    private final Search search;

    @Autowired
    public PSAPController(UserService userService, HazardousMaterialService hazardousMaterialsService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, KeyholderService keyholderService, PSAPUserService psapUserService) {
        this.userService = userService;
        this.hazardousMaterialsService = hazardousMaterialsService;
        this.propertiesService = propertiesService;
        this.medicalInformationService = medicalInformationService;
        this.medicalConditionService = medicalConditionService;
        this.prescribedMedicationService = prescribedMedicationService;
        this.personService = personService;
        this.emergencyContactService = emergencyContactService;
        this.telephoneService = telephoneService;
        this.vehicleService = vehicleService;
        this.vulnerablePersonInformationService = vulnerablePersonInformationService;
        this.keyholderService = keyholderService;
        this.psapUserService = psapUserService;
        this.search = new Search(this.personService, this.telephoneService, this.vehicleService, this.propertiesService, this.hazardousMaterialsService);
    }



    @PostMapping("/person-search")
    @ResponseBody
    public List<Person> search(@RequestBody PersonSearchForm personSearchForm){
        if(personSearchForm.getPsapUser() == null || login(personSearchForm.getPsapUser()) == null){
            return null;
        }

        List<Person> persons = search.search(personSearchForm);
        if(!personSearchForm.getPsapUser().isPolice() || !personSearchForm.getRequestedDataObjects().isPolice()){
            for(int i = 0; i < persons.toArray().length; i++){
                Person temp = persons.get(i);
                temp.setLicenseNumber(null);
                temp.setLicenseProvince(null);
                persons.set(i, temp);
            }
        }
        return persons;
    }

    @PostMapping("/telephone-search")
    @ResponseBody
    public List<Pair<Telephone, Person>> search(@RequestBody TelephoneSearchForm telephoneSearchForm){
        if(telephoneSearchForm.getPsapUser() == null || login(telephoneSearchForm.getPsapUser()) == null){
            return null;
        }

        List<Pair<Telephone, Person>> persons =search.search(telephoneSearchForm);
        if(!telephoneSearchForm.getPsapUser().isPolice() || !telephoneSearchForm.getRequestedDataObjects().isPolice()){
            for(int i = 0; i < persons.toArray().length; i++){
                Person temp = persons.get(i).getSecond();
                temp.setLicenseNumber(null);
                temp.setLicenseProvince(null);
                persons.set(i, Pair.of(persons.get(i).getFirst(), temp));
            }
        }
        return persons;
    }

    @PostMapping("/vehicle-search")
    @ResponseBody
    public List<Vehicle> search(@RequestBody VehicleSearchForm vehicleSearchForm){
        if(vehicleSearchForm.getPsapUser() == null || login(vehicleSearchForm.getPsapUser()) == null){
            return null;
        }
        if(!vehicleSearchForm.getPsapUser().isPolice()){
            return null;
        }
        return search.search(vehicleSearchForm);
    }

    @PostMapping("/property-search")
    @ResponseBody
    public List<Property> search(@RequestBody PropertySearchForm propertySearchForm){
        if(propertySearchForm.getPsapUser() == null || login(propertySearchForm.getPsapUser()) == null){
            return null;
        }
        return search.search(propertySearchForm);
    }



    @PostMapping("/person-info/{personId}")
    @ResponseBody
    public PersonResponse retrievePersonInfo(@PathVariable int personId, @RequestBody RequestedDataObjects requestedDataObjects){
        PersonResponse personResponse = new PersonResponse();
        Person person = personService.getPerson(personId);
        if(!requestedDataObjects.isPolice()){
            person.setLicenseNumber(null);
            person.setLicenseProvince(null);
        }
        personResponse.setPerson(person);
        personResponse.setEmergencyContacts(emergencyContactService.getEmergencyContacts(personId));
        if(requestedDataObjects.isMedical()) {
            personResponse.setVulnerablePersonInformation(vulnerablePersonInformationService.getVPI(personId));
            personResponse.setMedicalConditions(medicalConditionService.getMedicalConditions(personId));
            personResponse.setMedicalInformation(medicalInformationService.getMedicalInformation(personId));
            personResponse.setPrescribedMedications(prescribedMedicationService.getPrescribedMedications(personId));
        }
        personResponse.setTelephones(telephoneService.getTelephones(personId));
        return personResponse;
    }

    @PostMapping("/property-info/{propertyId}")
    @ResponseBody
    public PropertyResponse retrievePropertyInfo(@PathVariable int propertyId, @RequestBody RequestedDataObjects requestedDataObjects){
        PropertyResponse propertyResponse = new PropertyResponse();
        Property property = propertiesService.getProperty(propertyId);
        if(requestedDataObjects.isFire()){
            propertyResponse.setHazardousMaterials(hazardousMaterialsService.getHazardousMaterials(propertyId));
        }else{
            property.setElectricityProvider(null);
            property.setGasProvider(null);
            property.setGasShutOffLocation(null);
            property.setWaterProvider(null);
        }
        propertyResponse.setProperty(property);



        propertyResponse.setKeyholders(keyholderService.getKeyholders(propertyId));
        return propertyResponse;
    }

    @GetMapping("/get-main-person-name/{userId}")
    @ResponseBody
    public String getMainPersonName(@PathVariable int userId){

        Person person =  personService.getMainUser(userId);
        return person.getPersonGivenName() + ' ' + person.getPersonSurName();
    }


    @PostMapping("/get-person/{userId}")
    @ResponseBody
    public PersonResponse getPersonInfoByUserId(@PathVariable int userId, @RequestBody RequestedDataObjects requestedDataObjects){
        PersonResponse personResponse = new PersonResponse();
        Person person = personService.getMainUser(userId);
        if(!requestedDataObjects.isPolice()){
            person.setLicenseNumber(null);
            person.setLicenseProvince(null);
        }
        personResponse.setPerson(person);
        personResponse.setEmergencyContacts(emergencyContactService.getEmergencyContacts(person.getPersonId()));
        if(requestedDataObjects.isMedical()) {
            personResponse.setVulnerablePersonInformation(vulnerablePersonInformationService.getVPI(person.getPersonId()));
            personResponse.setMedicalConditions(medicalConditionService.getMedicalConditions(person.getPersonId()));
            personResponse.setMedicalInformation(medicalInformationService.getMedicalInformation(person.getPersonId()));
            personResponse.setPrescribedMedications(prescribedMedicationService.getPrescribedMedications(person.getPersonId()));
        }
        personResponse.setTelephones(telephoneService.getTelephones(person.getPersonId()));
        return personResponse;
    }


    @PostMapping("/login")
    @ResponseBody
    public PSAPUser login(@RequestBody PSAPUser psapUser){
        System.out.println("PSAP login request received");
        return psapUserService.login(psapUser);
    }

    @PostMapping("/register")
    @ResponseBody
    public PSAPUser register(@RequestBody PSAPUser psapUser){
        return psapUserService.register(psapUser);
    }


    @GetMapping("/proximity/{lat}/{lng}/{radius}")
    @ResponseBody
    public List<PropertyResponse> proximitySearchHazard(@PathVariable double lat, @PathVariable double lng, @PathVariable int radius){
        System.out.println(lat + " : " + lng + " : " + radius);
        return search.proximitySearch(lat, lng, radius);
    }

    @GetMapping("/proximity/get-all")
    @ResponseBody
    public  List<PropertyResponse> proximityGetAll(){
        return search.proximityGetAll();
    }
}

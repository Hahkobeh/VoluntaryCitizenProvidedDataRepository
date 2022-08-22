package ca.calgary.vcpdr.controllers;


import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterial;
import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContact;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalCondition;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformation;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedication;
import ca.calgary.vcpdr.data.personnal.telephone.Telephone;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformation;
import ca.calgary.vcpdr.data.property.Property;
import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.personnal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.keyholder.Keyholder;
import ca.calgary.vcpdr.data.keyholder.KeyholderService;
import ca.calgary.vcpdr.data.user.User;
import ca.calgary.vcpdr.data.user.UserService;
import ca.calgary.vcpdr.data.vehicle.Vehicle;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformationService;
import ca.calgary.vcpdr.forms.LoginForm;
import ca.calgary.vcpdr.forms.RegistrationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"*"})
public class UserController{


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
    @Autowired
    public UserController(UserService userService, HazardousMaterialService hazardousMaterialsService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, KeyholderService keyholderService) {
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
    }

    @GetMapping("/test")
    @ResponseBody
    public boolean testConnection(){
        return true;
    }




    //User

    @PostMapping("/register")
    @ResponseBody
    public User register(@RequestBody RegistrationForm registrationForm){
        System.out.println("Register request received at: " + new Date());
        System.out.println(registrationForm);
        if(userService.emailExists(registrationForm.getEmail())){
            return null;
        }
        User user = userService.createUser(registrationForm.getEmail(), registrationForm.getPassword());
        Person person = personService.createPerson(user.getUserId(), registrationForm.getPersonGivenName(), registrationForm.getPersonSurName(), "user");
        telephoneService.createTelephone(person.getPersonId(), registrationForm.getTelephoneNumber(), registrationForm.getTelephoneType());
        return user;
    }

    @PostMapping("/login")
    @ResponseBody
    public User login(@RequestBody LoginForm loginForm){
        System.out.println("Login request received at: " + new Date());
        if(loginForm.getEmail().equals("") || loginForm.getPassword().equals("")){
            System.out.println("Incomplete login form");
            return null;
        }
        return userService.login(loginForm.getEmail(), loginForm.getPassword());
    }

    @GetMapping("/email-taken/{email}")
    @ResponseBody
    public boolean emailTaken(@PathVariable String email){
        return userService.emailExists(email);
    }


    @GetMapping("/change-password/{userId}/{newPassword}")
    @ResponseBody
    public boolean changePassword(@PathVariable int userId, @PathVariable String newPassword){
        return userService.changePassword(userId, newPassword);
    }

    //Person



    @PostMapping("/person/create")
    @ResponseBody
    public Person createPerson(@RequestBody Person person){
        if(userService.userIdExists(person.getUserId())) {
            return personService.createPerson(person.getUserId(), person.getPersonGivenName(), person.getPersonSurName(), person.getPersonRelationship());

        }
        return null;
    }

    @PostMapping("/person/update")
    @ResponseBody
    public Person updatePerson(@RequestBody Person person){
        System.out.println(person);
        return personService.updatePerson(person);
    }

    @GetMapping("/person/{userId}")
    @ResponseBody
    public List<Person> getPersons(@PathVariable int userId){
        return personService.getPersons(userId);
    }

    @DeleteMapping("/person/delete/{personId}")
    @ResponseBody
    public boolean deletePerson(@PathVariable int personId){
        return personService.deletePerson(personId);
    }



    //Emergency contact

    @PostMapping("/emergency-contact/create")
    @ResponseBody
    public EmergencyContact createEmergencyContact(@RequestBody EmergencyContact emergencyContact){
        return emergencyContactService.createEmergencyContact(emergencyContact);
    }

    @DeleteMapping("/emergency-contact/delete")
    @ResponseBody
    public boolean deleteEmergencyContact(@RequestBody EmergencyContact emergencyContact){
        return emergencyContactService.deleteEmergencyContact(emergencyContact);
    }

    @GetMapping("/emergency-contact/{personId}")
    @ResponseBody
    public List<EmergencyContact> getEmergencyContacts(@PathVariable int personId){
        return emergencyContactService.getEmergencyContacts(personId);
    }


    //Telephone

    @PostMapping("/telephone/create")
    @ResponseBody
    public Telephone createTelephone(@RequestBody Telephone telephone){
        return telephoneService.createTelephone(telephone);
    }

    @DeleteMapping("/telephone/delete")
    @ResponseBody
    public boolean deleteTelephone(@RequestBody Telephone telephone){
        return telephoneService.deleteTelephone(telephone);
    }

    @GetMapping("/telephone/{personId}")
    @ResponseBody
    public List<Telephone> getTelephones(@PathVariable int personId){
        return telephoneService.getTelephones(personId);
    }

    //Medical Information

    @PostMapping("/medical-information/create")
    @ResponseBody
    public MedicalInformation createMedicalInformation(@RequestBody MedicalInformation medicalInformation){
        return medicalInformationService.createMedicalInformation(medicalInformation);
    }

	

    @DeleteMapping("/medical-information/delete")
    @ResponseBody
    public boolean deleteMedicalInformation(@RequestBody MedicalInformation medicalInformation){
        return medicalInformationService.deleteMedicalInformation(medicalInformation);
    }

    @GetMapping("/medical-information/{personId}")
    @ResponseBody
    public MedicalInformation getMedicalInformation(@PathVariable int personId){
        return medicalInformationService.getMedicalInformation(personId);
    }

    //Prescribed Medication

    @PostMapping("/prescribed-medication/create")
    @ResponseBody
    public PrescribedMedication createPrescribedMedication(@RequestBody PrescribedMedication prescribedMedication){
        return prescribedMedicationService.createPrescribedMedication(prescribedMedication);
    }



    @DeleteMapping("/prescribed-medication/delete")
    @ResponseBody
    public boolean deletePrescribedMedication(@RequestBody PrescribedMedication prescribedMedication){
        return prescribedMedicationService.deletePrescibedMedication(prescribedMedication);
    }

    @GetMapping("/prescribed-medication/{personId}")
    @ResponseBody
    public List<PrescribedMedication> getPrescribedMedication(@PathVariable int personId){
        return prescribedMedicationService.getPrescribedMedications(personId);
    }

    //Medical Condition

    @PostMapping("/medical-condition/create")
    @ResponseBody
    public MedicalCondition createMedicalCondition(@RequestBody MedicalCondition medicalCondition){
        return medicalConditionService.createMedicalCondition(medicalCondition);
    }

    @DeleteMapping("/medical-condition/delete")
    @ResponseBody
    public boolean deleteMedicalCondition(@RequestBody MedicalCondition medicalCondition){
        return medicalConditionService.deleteMedicalCondition(medicalCondition);
    }

    @GetMapping("/medical-condition/{personId}")
    @ResponseBody
    public List<MedicalCondition> getMedicalCondition(@PathVariable int personId){
        return medicalConditionService.getMedicalConditions(personId);
    }

    //Vulnerable Person Information

    @PostMapping("/vpi/create")
    @ResponseBody
    public VulnerablePersonInformation createVPI(@RequestBody VulnerablePersonInformation vulnerablePersonInformation){
        return vulnerablePersonInformationService.createVPI(vulnerablePersonInformation);
    }

    @DeleteMapping("/vpi/delete")
    @ResponseBody
    public boolean deleteVPI(@RequestBody VulnerablePersonInformation vulnerablePersonInformation){
        return vulnerablePersonInformationService.deleteVPI(vulnerablePersonInformation);
    }

    @GetMapping("/vpi/{personId}")
    @ResponseBody
    public VulnerablePersonInformation getVPI(@PathVariable int personId){
        return vulnerablePersonInformationService.getVPI(personId);
    }

    //Property

    @PostMapping("/property/create")
    @ResponseBody
    public Property createProperty(@RequestBody Property property){
        return propertiesService.createProperty(property);
    }

    @PostMapping("/property/update")
    @ResponseBody
    public Property updateProperty(@RequestBody Property property){
        return propertiesService.updateProperty(property);
    }

    @DeleteMapping("/property/delete/{propertyId}")
    @ResponseBody
    public boolean deleteProperty(@PathVariable int propertyId){
        return propertiesService.deleteProperty(propertyId);
    }

    @GetMapping("/property/{userId}")
    @ResponseBody
    public List<Property> getProperties(@PathVariable int userId){
        return propertiesService.getProperties(userId);
    }

    //keyholder

    @GetMapping("/keyholder/{propertyId}")
    @ResponseBody
    public List<Keyholder> getKeyholders(@PathVariable int propertyId){
        return keyholderService.getKeyholders(propertyId);
    }


    @PostMapping("/keyholder/create")
    @ResponseBody
    public Keyholder createKeyholder(@RequestBody Keyholder keyholder){
        return keyholderService.createKeyholder(keyholder);
    }

    @DeleteMapping("/keyholder/delete")
    @ResponseBody
    public boolean deleteKeyholder(@RequestBody Keyholder keyholder){
        return keyholderService.deleteKeyholder(keyholder);
    }


    //Hazardous material


    @PostMapping("/hazardous-material/create")
    @ResponseBody
    public HazardousMaterial createHazardousMaterial(@RequestBody HazardousMaterial hazardousMaterial){
        return hazardousMaterialsService.createHazardousMaterial(hazardousMaterial);
    }

    @DeleteMapping("/hazardous-material/delete/{hazardousMaterialId}")
    @ResponseBody
    public boolean deleteHazardousMaterial(@PathVariable int hazardousMaterialId){
        return hazardousMaterialsService.deleteHazardousMaterial(hazardousMaterialId);
    }

    @GetMapping("/hazardous-material/{propertyId}")
    @ResponseBody
    public List<HazardousMaterial> getHazardousMaterials(@PathVariable int propertyId){
        return hazardousMaterialsService.getHazardousMaterials(propertyId);
    }

    //Vehicle

    @GetMapping("/vehicle/{userId}")
    @ResponseBody
    public List<Vehicle> getVehicles(@PathVariable int userId){
        return vehicleService.getVehicles(userId);
    }

    @DeleteMapping("/vehicle/delete")
    @ResponseBody
    public boolean deleteVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.deleteVehicle(vehicle);
    }

    @PostMapping("/vehicle/create")
    @ResponseBody
    public Vehicle createVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.createVehicle(vehicle);
    }


    @PostMapping("/vehicle/update")
    @ResponseBody
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle){
        return vehicleService.updateVehicle(vehicle);
    }


    //Disclaimer

    @GetMapping("/disclaimer-agree/{userId}/{date}")
    @ResponseBody
    public boolean disclaimerAgree(@PathVariable int userId, @PathVariable String date){

        return userService.disclaimerAgree(userId, date);


    }
}

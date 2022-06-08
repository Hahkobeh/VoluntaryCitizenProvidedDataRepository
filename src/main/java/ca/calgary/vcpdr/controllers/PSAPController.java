package ca.calgary.vcpdr.controllers;

import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.personnal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformationService;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.propertyrelationship.PropertyRelationshipService;
import ca.calgary.vcpdr.data.user.UserService;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import ca.calgary.vcpdr.search.PersonSearchForm;
import ca.calgary.vcpdr.search.Search;
import ca.calgary.vcpdr.search.psap.PSAPUser;
import ca.calgary.vcpdr.search.psap.PSAPUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(path = "api/psap/v1")
@CrossOrigin(origins = {"http://localhost:3001"})
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
    private final PropertyRelationshipService propertyRelationshipService;
    private final PSAPUserService psapUserService;

    private final Search search;

    @Autowired
    public PSAPController(UserService userService, HazardousMaterialService hazardousMaterialsService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, PropertyRelationshipService propertyRelationshipService, PSAPUserService psapUserService) {
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
        this.propertyRelationshipService = propertyRelationshipService;
        this.psapUserService = psapUserService;
        this.search = new Search(this.personService);
    }

    @PostMapping("/person-search")
    @ResponseBody
    public List<Person> search(@RequestBody PersonSearchForm personSearchForm){
        return search.findPersons(personSearchForm);
    }

    @PostMapping("/login")
    @ResponseBody
    public ResponseEntity<PSAPUser> login(@RequestBody PSAPUser psapUser){
        return ResponseEntity.status(HttpStatus.OK).body(psapUserService.login(psapUser));
    }

    @PostMapping("/register")
    @ResponseBody
    public PSAPUser register(@RequestBody PSAPUser psapUser){
        return psapUserService.register(psapUser);
    }


    @GetMapping("/{type}")
    @ResponseBody
    public <T> List<T> getThing(@PathVariable String type){
        return (List<T>) null;
    }

}

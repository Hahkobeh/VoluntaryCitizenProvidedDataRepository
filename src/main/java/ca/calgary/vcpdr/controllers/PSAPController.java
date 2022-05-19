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
import ca.calgary.vcpdr.data.relationships.accountcreator.AccountCreatorService;
import ca.calgary.vcpdr.data.relationships.personrelationship.PersonRelationshipService;
import ca.calgary.vcpdr.data.relationships.propertyrelationship.PropertyRelationshipService;
import ca.calgary.vcpdr.data.user.User;
import ca.calgary.vcpdr.data.user.UserService;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private final AccountCreatorService accountCreatorService;
    private final PersonRelationshipService personRelationshipService;
    private final PropertyRelationshipService propertyRelationshipService;
    @Autowired
    public PSAPController(UserService userService, HazardousMaterialService hazardousMaterialsService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, AccountCreatorService accountCreatorService, PersonRelationshipService personRelationshipService, PropertyRelationshipService propertyRelationshipService) {
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
        this.accountCreatorService = accountCreatorService;
        this.personRelationshipService = personRelationshipService;
        this.propertyRelationshipService = propertyRelationshipService;
    }

    @GetMapping("/{type}")
    @ResponseBody
    public <T> List<T> getThing(@PathVariable String type){
        return (List<T>) personService.getPersons(1);
    }

}

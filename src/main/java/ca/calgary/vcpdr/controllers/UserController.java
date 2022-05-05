package ca.calgary.vcpdr.controllers;

import ca.calgary.vcpdr.data.location.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.location.keyholder.KeyHolderService;
import ca.calgary.vcpdr.data.location.property.PropertyService;
import ca.calgary.vcpdr.data.medical.medicalcondition.MedicalConditionRepository;
import ca.calgary.vcpdr.data.medical.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.medical.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.medical.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.personal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.personal.person.PersonService;
import ca.calgary.vcpdr.data.personal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.personal.vehicle.VehicleService;
import ca.calgary.vcpdr.data.personal.vulnerableperson.VulnerablePersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ca.calgary.vcpdr.data.user.UserService;

@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController{


    private final UserService userService;
    private final HazardousMaterialService hazardousMaterialService;
    private final KeyHolderService keyHolderService;
    private final PropertyService propertyService;
    private final MedicalInformationService medicalInformationService;
    private final MedicalConditionService medicalConditionService;
    private final PrescribedMedicationService prescribedMedicationService;
    private final PersonService personService;
    private final EmergencyContactService emergencyContactService;
    private final TelephoneService telephoneService;
    private final VehicleService vehicleService;
    private final VulnerablePersonService vulnerablePersonService;


    @Autowired
    public UserController(UserService userService, HazardousMaterialService hazardousMaterialService, KeyHolderService keyHolderService, PropertyService propertyService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonService vulnerablePersonService) {
        this.userService = userService;
        this.hazardousMaterialService = hazardousMaterialService;
        this.keyHolderService = keyHolderService;
        this.propertyService = propertyService;
        this.medicalInformationService = medicalInformationService;
        this.medicalConditionService = medicalConditionService;
        this.prescribedMedicationService = prescribedMedicationService;
        this.personService = personService;
        this.emergencyContactService = emergencyContactService;
        this.telephoneService = telephoneService;
        this.vehicleService = vehicleService;
        this.vulnerablePersonService = vulnerablePersonService;
    }

    @PostMapping("/adduser")
    @ResponseBody
    public boolean addUser(){
        return true;
    }

    @GetMapping("/login")
    @ResponseBody
    public boolean login(){
        return false;


    }
}

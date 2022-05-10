package ca.calgary.vcpdr.controllers;

import ca.calgary.vcpdr.data.location.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.location.keyholder.KeyHolderService;
import ca.calgary.vcpdr.data.location.property.PropertyService;
import ca.calgary.vcpdr.data.medical.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.medical.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.medical.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.personal.dependents.DependentService;
import ca.calgary.vcpdr.data.personal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.personal.person.PersonService;
import ca.calgary.vcpdr.data.personal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.personal.vehicle.VehicleService;
import ca.calgary.vcpdr.data.personal.vulnerablepersoninformation.VulnerablePersonInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ca.calgary.vcpdr.data.user.UserService;

@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController{


    private final UserService userService;
    private final HazardousMaterialService hazardousMaterialsService;
    private final KeyHolderService keyHoldersService;
    private final PropertyService propertiesService;
    private final MedicalInformationService medicalInformationService;
    private final MedicalConditionService medicalConditionService;
    private final PrescribedMedicationService prescribedMedicationService;
    private final PersonService personService;
    private final EmergencyContactService emergencyContactService;
    private final TelephoneService telephoneService;
    private final VehicleService vehicleService;
    private final VulnerablePersonInformationService vulnerablePersonInformationService;
    private final DependentService dependentService;

    @Autowired
    public UserController(UserService userService, HazardousMaterialService hazardousMaterialsService, KeyHolderService keyHoldersService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, DependentService dependentService) {
        this.userService = userService;
        this.hazardousMaterialsService = hazardousMaterialsService;
        this.keyHoldersService = keyHoldersService;
        this.propertiesService = propertiesService;
        this.medicalInformationService = medicalInformationService;
        this.medicalConditionService = medicalConditionService;
        this.prescribedMedicationService = prescribedMedicationService;
        this.personService = personService;
        this.emergencyContactService = emergencyContactService;
        this.telephoneService = telephoneService;
        this.vehicleService = vehicleService;
        this.vulnerablePersonInformationService = vulnerablePersonInformationService;
        this.dependentService = dependentService;
    }



    /*
    //USER

    @PostMapping("/register")
    @ResponseBody
    public Userold registerUser(@RequestBody RegistrationForm registrationForm){
        Userold userold = userService.register(registrationForm);
        telephoneService.addTelephone(new TelephoneForm(userold.getUserID(), registrationForm.getTelephoneNumber(), registrationForm.getTelephoneType()));
        return userold;
    }

    @PostMapping("/login")
    @ResponseBody
    public Userold login(@RequestBody LoginForm loginForm){
        return userService.login(loginForm);
    }

    //TELEPHONE

    @PostMapping("/add-phone")
    @ResponseBody
    public Telephone addPhone(@RequestBody TelephoneForm telephoneForm){
        return telephoneService.addTelephone(telephoneForm);
    }*/

    @GetMapping("/test")
    public void test(){
        userService.test();
    }
}

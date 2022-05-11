package ca.calgary.vcpdr.controllers;


import ca.calgary.vcpdr.data.accountcreator.AccountCreatorService;
import ca.calgary.vcpdr.data.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.keyholder.KeyholderService;
import ca.calgary.vcpdr.data.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.person.Person;
import ca.calgary.vcpdr.data.person.PersonService;
import ca.calgary.vcpdr.data.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.telephone.TelephoneService;
import ca.calgary.vcpdr.data.user.User;
import ca.calgary.vcpdr.data.user.UserService;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import ca.calgary.vcpdr.data.vulnerablepersoninformation.VulnerablePersonInformationService;
import ca.calgary.vcpdr.forms.LoginForm;
import ca.calgary.vcpdr.forms.RegistrationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController{


    private final UserService userService;
    private final HazardousMaterialService hazardousMaterialsService;
    private final KeyholderService keyholdersService;
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
    @Autowired
    public UserController(UserService userService, HazardousMaterialService hazardousMaterialsService, KeyholderService keyholdersService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, AccountCreatorService accountCreatorService) {
        this.userService = userService;
        this.hazardousMaterialsService = hazardousMaterialsService;
        this.keyholdersService = keyholdersService;
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
    }

    //User

    @PostMapping("/register")
    @ResponseBody
    public User register(@RequestBody RegistrationForm registrationForm){
        System.out.println("Register request received at: " + new Date().toString());
        User user = userService.createUser(registrationForm.getEmail(), registrationForm.getPassword());
        Person person = personService.createPerson(user.getUserId(), registrationForm.getPersonGivenName(), registrationForm.getPersonSurName());
        accountCreatorService.createLink(user.getUserId(), person.getPersonId());
        telephoneService.createTelephone(person.getPersonId(), registrationForm.getTelephoneNumber(), registrationForm.getTelephoneType());
        return user;
    }

    @PostMapping("/login")
    @ResponseBody
    public User login(@RequestBody LoginForm loginForm){
        System.out.println("Login request received at: " + new Date().toString());
        User user = userService.login(loginForm.getEmail(), loginForm.getPassword());
        return null;
    }

    //Person

    //Emergency contact

    //Hazardous material

    //Keyholder

    //Medical Condition

    //
}

package ca.calgary.vcpdr.controllers;


import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContact;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalCondition;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformation;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedication;
import ca.calgary.vcpdr.data.personnal.telephone.Telephone;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformation;
import ca.calgary.vcpdr.data.property.Property;
import ca.calgary.vcpdr.data.relationships.accountcreator.AccountCreator;
import ca.calgary.vcpdr.data.relationships.accountcreator.AccountCreatorService;
import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContactService;
import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterialService;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalConditionService;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformationService;
import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedicationService;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.personnal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.relationships.personrelationship.PersonRelationship;
import ca.calgary.vcpdr.data.relationships.personrelationship.PersonRelationshipService;
import ca.calgary.vcpdr.data.relationships.propertyrelationship.PropertyRelationshipService;
import ca.calgary.vcpdr.data.user.User;
import ca.calgary.vcpdr.data.user.UserService;
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
@CrossOrigin(origins = {"http://localhost:3000"})
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
    private final AccountCreatorService accountCreatorService;
    private final PersonRelationshipService personRelationshipService;
    private final PropertyRelationshipService propertyRelationshipService;
    @Autowired
    public UserController(UserService userService, HazardousMaterialService hazardousMaterialsService, PropertyService propertiesService, MedicalInformationService medicalInformationService, MedicalConditionService medicalConditionService, PrescribedMedicationService prescribedMedicationService, PersonService personService, EmergencyContactService emergencyContactService, TelephoneService telephoneService, VehicleService vehicleService, VulnerablePersonInformationService vulnerablePersonInformationService, AccountCreatorService accountCreatorService, PersonRelationshipService personRelationshipService, PropertyRelationshipService propertyRelationshipService) {
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
        Person person = personService.createPerson(user.getUserId(), registrationForm.getPersonGivenName(), registrationForm.getPersonSurName());
        accountCreatorService.createLink(user.getUserId(), person.getPersonId());
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


    //Person



    @PostMapping("/person/create")
    @ResponseBody
    public Person createPerson(@RequestBody Person person){
        if(userService.userIdExists(person.getUserId())) {
            return personService.createPerson(person.getUserId(), person.getPersonGivenName(), person.getPersonSurName());
        }
        return null;
    }

    @PostMapping("/person/update")
    @ResponseBody
    public Person updatePerson(@RequestBody Person person){
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

    //Account creator

    @GetMapping("/account-creator/{userId}")
    @ResponseBody
    public AccountCreator getAccountCreator(@PathVariable int userId){
        return accountCreatorService.getLink(userId);
    }

    //Person relationships

    @PostMapping("/person-relationship/create")
    @ResponseBody
    public PersonRelationship createPersonRelationship(@RequestBody PersonRelationship personRelationship){
        System.out.println(personRelationship);
        return personRelationshipService.createPersonRelationship(personRelationship);
    }

    @GetMapping("/person-relationship/{userId}")
    @ResponseBody
    public List<PersonRelationship> getPersonRelationships(@PathVariable int userId){
        int personId = accountCreatorService.getUserPerson(userId);
        return personRelationshipService.getPersonRelationships(personId);
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

    //Property

    @PostMapping("/property/create")
    @ResponseBody
    public Property createProperty(@RequestBody Property property){
        return propertiesService.createProperty(property);
    }

    @PostMapping("/property/delete")
    @ResponseBody
    public boolean deleteProperty(@RequestBody Property property){
        return propertiesService.deleteProperty(property);
    }

    //Property Relationship



    //Hazardous material


    //Vehicle


}

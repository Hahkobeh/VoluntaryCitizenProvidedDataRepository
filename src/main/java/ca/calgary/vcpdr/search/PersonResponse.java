package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.data.personnal.emergencycontact.EmergencyContact;
import ca.calgary.vcpdr.data.personnal.medicalcondition.MedicalCondition;
import ca.calgary.vcpdr.data.personnal.medicalinformation.MedicalInformation;
import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.prescribedmedication.PrescribedMedication;
import ca.calgary.vcpdr.data.personnal.telephone.Telephone;
import ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation.VulnerablePersonInformation;
import lombok.Data;

import java.util.List;

@Data
public class PersonResponse {
     private Person person;
     private List<EmergencyContact> emergencyContacts;
     private List<MedicalCondition> medicalConditions;
     private List<Telephone> telephones;
     private List<PrescribedMedication> prescribedMedications;
     private MedicalInformation medicalInformation;
     private VulnerablePersonInformation vulnerablePersonInformation;




    public PersonResponse(){

    }
}

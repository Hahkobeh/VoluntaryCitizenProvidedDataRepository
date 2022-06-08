package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.data.personnal.person.Person;
import lombok.Data;

import java.util.List;

@Data
public class PersonResponse {
     private Person person;





    public PersonResponse(Search search){
        boolean firePermission;
        boolean policePermission;
        boolean medicalPermission;
        boolean vpiPermission;

        System.out.println(search);
    }
}

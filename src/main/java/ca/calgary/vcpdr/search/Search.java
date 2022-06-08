package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;

import java.util.*;
import java.util.stream.Collectors;

@Data
public class Search {
    private final PersonService personService;

    public Search(PersonService personService){
        this.personService = personService;
    }


    public List<Person> findPersons(PersonSearchForm personSearchForm){
        List<Person> persons = null;
        System.out.println(personSearchForm);
        if(personSearchForm.getPersonName() != null){
            String [] names = personSearchForm.getPersonName().trim().split("\\s+");

            if(Objects.equals(names[0], "")){
                return null;
            }

            for (int i = 0; i < names.length; i++) {
                names[i] = capitalize(names[i]);
            }

            switch (names.length){
                case 1: {
                    persons = personService.findPerson(names[0]);
                    break;
                }
                case 2: {
                    persons = personService.findPerson(names[0], names[1]);
                    break;
                }
                case 3: {
                    persons = personService.findPerson(names[0], names[1], names[2]);
                    break;
                }
                default:
                    return null;
            }
        }else{
            persons = personService.getAll();
        }




        if(personSearchForm.getPersonBirthDate() != null){
            persons = persons
                        .stream()
                        .filter(person -> (
                            person.getPersonBirthDate() == null ||
                            person.getPersonBirthDate().equals(personSearchForm.getPersonBirthDate())
                        ))
                        .collect(Collectors.toList());
        }

        if(personSearchForm.getPersonSexCode() != null){
            persons = persons
                        .stream()
                        .filter(person -> (
                            person.getPersonSexCode() == null ||
                            Objects.equals(person.getPersonSexCode(), "") ||
                            person.getPersonSexCode().equals(personSearchForm.getPersonSexCode())
                        ))
                        .collect(Collectors.toList());
        }

        return persons;

    }

    private String capitalize(String word){

        return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase(Locale.ROOT);
    }
}


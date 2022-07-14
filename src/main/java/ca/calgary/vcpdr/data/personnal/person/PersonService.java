package ca.calgary.vcpdr.data.personnal.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person createPerson(int userId, String personGivenName, String personSurName, String personRelationship) {
        return personRepository.save(new Person(userId, personGivenName, personSurName, personRelationship));
    }

    public Person updatePerson(Person person) {

        Optional<Person> existingPerson = personRepository.findById(person.getPersonId());
        if(existingPerson.isPresent() && existingPerson.get().getUserId() == person.getUserId() && Objects.equals(existingPerson.get().getPersonGivenName(), person.getPersonGivenName()) && Objects.equals(existingPerson.get().getPersonSurName(), person.getPersonSurName())) {
            return personRepository.save(person);
        }
        return null;
    }

    public Person getMainUser(int userId) {
        System.out.println(personRepository.findAllByUserId(userId).stream().filter(person -> Objects.equals(person.getPersonRelationship(), "user")).collect(Collectors.toList()));
        return personRepository.findAllByUserId(userId).stream().filter(person -> Objects.equals(person.getPersonRelationship(), "user")).collect(Collectors.toList()).get(0);
    }

    public List<Person> getPersons(int userId) {
        return personRepository.findAllByUserId(userId);
    }


    public boolean deletePerson(int personId) {
        personRepository.deleteById(personId);
        return true;
    }

    public List<Person> findPerson(String givenName, String surName) {
        return personRepository.findAllByPersonGivenNameAndPersonSurName(givenName,surName);
    }
    public List<Person> findPerson(String name) {
        return personRepository.findAllByPersonGivenNameOrPersonSurName(name,name);
    }

    public List<Person> findPerson(String givenName, String middleName, String surName) {
        return personRepository.findAllByPersonGivenNameAndPersonMiddleNameAndPersonSurName(givenName,middleName,surName);
    }

    public List<Person> getAll() {
        return (List<Person>) personRepository.findAll();
    }

    public Person getPerson(int personId) {
        return personRepository.findById(personId).orElse(null);
    }
}


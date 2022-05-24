package ca.calgary.vcpdr.data.personnal.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    public List<Person> getPersons(int userId) {
        return personRepository.findAllByUserId(userId);
    }

    public boolean deletePerson(int personId) {
        personRepository.deleteById(personId);
        return true;
    }
}


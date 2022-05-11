package ca.calgary.vcpdr.data.person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Person createPerson(int userId, String personGivenName, String personSurName) {
        return personRepository.save(new Person(userId, personGivenName, personSurName));
    }
}


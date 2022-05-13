package ca.calgary.vcpdr.data.relationships.personrelationship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonRelationshipService {
    private final PersonRelationshipRepository personRelationshipRepository;

    @Autowired
    public PersonRelationshipService(PersonRelationshipRepository personRelationshipRepository) {
        this.personRelationshipRepository = personRelationshipRepository;
    }

    public PersonRelationship createPersonRelationship(PersonRelationship personRelationship) {
        return personRelationshipRepository.save(personRelationship);
    }

    public List<PersonRelationship> getPersonRelationships(int personId) {
        return personRelationshipRepository.findAllByPersonId1(personId);
    }
}

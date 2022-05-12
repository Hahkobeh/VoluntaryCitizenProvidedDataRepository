package ca.calgary.vcpdr.data.personrelationship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonRelationshipService {
    private final PersonRelationshipRepository personRelationshipRepository;

    @Autowired
    public PersonRelationshipService(PersonRelationshipRepository personRelationshipRepository) {
        this.personRelationshipRepository = personRelationshipRepository;
    }
}

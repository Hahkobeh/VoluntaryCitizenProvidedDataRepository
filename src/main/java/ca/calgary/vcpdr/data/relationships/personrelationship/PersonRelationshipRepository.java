package ca.calgary.vcpdr.data.relationships.personrelationship;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRelationshipRepository extends CrudRepository<PersonRelationship, PersonRelationshipPK> {
    List<PersonRelationship> findAllByPersonId1(int personId1);
}

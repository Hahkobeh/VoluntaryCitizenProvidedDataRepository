package ca.calgary.vcpdr.data.personrelationship;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRelationshipRepository extends CrudRepository<PersonRelationship, PersonRelationshipPK> {
}

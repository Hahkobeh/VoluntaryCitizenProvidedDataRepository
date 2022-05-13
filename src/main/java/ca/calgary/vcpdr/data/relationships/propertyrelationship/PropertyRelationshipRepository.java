package ca.calgary.vcpdr.data.relationships.propertyrelationship;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRelationshipRepository extends CrudRepository<PropertyRelationship, PropertyRelationshipPK> {
}

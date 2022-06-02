package ca.calgary.vcpdr.data.propertyrelationship;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRelationshipRepository extends CrudRepository<PropertyRelationship, PropertyRelationshipPK> {
    List<PropertyRelationship> findAllByPropertyId(int propertyId);
}

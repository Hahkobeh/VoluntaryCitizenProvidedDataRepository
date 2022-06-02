package ca.calgary.vcpdr.data.propertyrelationship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyRelationshipService {
    private final PropertyRelationshipRepository propertyRelationshipRepository;

    @Autowired
    public PropertyRelationshipService(PropertyRelationshipRepository propertyRelationshipRepository) {
        this.propertyRelationshipRepository = propertyRelationshipRepository;
    }

    public List<PropertyRelationship> getPropertyRelationships(int propertyId) {
        return propertyRelationshipRepository.findAllByPropertyId(propertyId);
    }

    public boolean deletePropertyRelationship(PropertyRelationship propertyRelationship) {
        propertyRelationshipRepository.deleteById(new PropertyRelationshipPK(propertyRelationship.getPropertyId(), propertyRelationship.getPersonId()));
        return true;
    }

    public PropertyRelationship createPropertyRelationship(PropertyRelationship propertyRelationship) {
        return propertyRelationshipRepository.save(propertyRelationship);
    }
}

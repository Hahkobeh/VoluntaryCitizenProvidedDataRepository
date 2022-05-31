package ca.calgary.vcpdr.data.propertyrelationship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PropertyRelationshipService {
    private final PropertyRelationshipRepository propertyRelationshipRepository;

    @Autowired
    public PropertyRelationshipService(PropertyRelationshipRepository propertyRelationshipRepository) {
        this.propertyRelationshipRepository = propertyRelationshipRepository;
    }
}

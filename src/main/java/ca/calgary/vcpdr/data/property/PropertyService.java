package ca.calgary.vcpdr.data.property;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }

    public boolean deleteProperty(Property property) {
        if(propertyRepository.existsById(property.getPropertyId())){
            propertyRepository.deleteById(property.getPropertyId());
            return true;
        }
        return false;
    }

    public List<Property> getProperties(int userId) {
        return propertyRepository.findAllByUserId(userId);
    }
}

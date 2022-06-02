package ca.calgary.vcpdr.data.property;

import ca.calgary.vcpdr.data.personnal.person.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class PropertyService {
    @Autowired
    private PropertyRepository propertyRepository;

    public Property createProperty(Property property) {
        return propertyRepository.save(property);
    }

    public boolean deleteProperty(int propertyId) {
        if(propertyRepository.findById(propertyId).isPresent()){
            propertyRepository.deleteById(propertyId);
            return true;
        }
        return false;
    }

    public Property updateProperty(Property property) {

        Optional<Property> existingProperty = propertyRepository.findById(property.getPropertyId());
        if(existingProperty.isPresent() && existingProperty.get().getUserId() == property.getUserId()) {
            return propertyRepository.save(property);
        }
        return null;
    }

    public List<Property> getProperties(int userId) {
        return propertyRepository.findAllByUserId(userId);
    }
}

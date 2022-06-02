package ca.calgary.vcpdr.data.hazardousmaterial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HazardousMaterialService {
    @Autowired
    private HazardousMaterialRepository hazardousMaterialRepository;

    public List<HazardousMaterial> getHazardousMaterials(int propertyId) {
        return hazardousMaterialRepository.findAllByPropertyId(propertyId);

    }

    public HazardousMaterial createHazardousMaterial(HazardousMaterial hazardousMaterial) {
        return hazardousMaterialRepository.save(hazardousMaterial);
    }

    public boolean deleteHazardousMaterial(int hazardousMaterialId) {
        if(hazardousMaterialRepository.findById(hazardousMaterialId).isPresent()) {
            hazardousMaterialRepository.deleteById(hazardousMaterialId);
            return true;

        }
        return false;
    }
}

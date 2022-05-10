package ca.calgary.vcpdr.data.location.hazardousmaterial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HazardousMaterialService {

    private final HazardousMaterialRepository hazardousMaterialRepository;

    @Autowired
    public HazardousMaterialService(HazardousMaterialRepository hazardousMaterialRepository) {
        this.hazardousMaterialRepository = hazardousMaterialRepository;
    }
}

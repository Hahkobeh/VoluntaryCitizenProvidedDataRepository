package ca.calgary.vcpdr.data.hazardousmaterial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HazardousMaterialService {
    @Autowired
    private HazardousMaterialRepository hazardousMaterialRepository;
}

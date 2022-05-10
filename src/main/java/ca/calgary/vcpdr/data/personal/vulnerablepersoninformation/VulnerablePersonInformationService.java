package ca.calgary.vcpdr.data.personal.vulnerablepersoninformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VulnerablePersonInformationService {

    private final VulnerablePersonInformationRepository vulnerablePersonInformationRepository;

    @Autowired
    public VulnerablePersonInformationService(VulnerablePersonInformationRepository vulnerablePersonInformationRepository) {
        this.vulnerablePersonInformationRepository = vulnerablePersonInformationRepository;
    }
}

package ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VulnerablePersonInformationService {
    private final VulnerablePersonInformationRepository vulnerablePersonInformationRepository;

    @Autowired
    public VulnerablePersonInformationService(VulnerablePersonInformationRepository vulnerablePersonInformationRepository) {
        this.vulnerablePersonInformationRepository = vulnerablePersonInformationRepository;
    }

    public VulnerablePersonInformation createVPI(VulnerablePersonInformation vulnerablePersonInformation) {
        return vulnerablePersonInformationRepository.save(vulnerablePersonInformation);
    }

    public boolean deleteVPI(VulnerablePersonInformation vulnerablePersonInformation) {
        if(vulnerablePersonInformationRepository.existsById(vulnerablePersonInformation.getPersonId())){
            vulnerablePersonInformationRepository.deleteById(vulnerablePersonInformation.getPersonId());
            return true;
        }
        return false;
    }
}

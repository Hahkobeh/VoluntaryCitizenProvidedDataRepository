package ca.calgary.vcpdr.data.personnal.medicalinformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalInformationService {
    @Autowired
    private MedicalInformationRepository medicalInformationRepository;

    public MedicalInformation createMedicalInformation(MedicalInformation medicalInformation) {
        return medicalInformationRepository.save(medicalInformation);
    }

    public boolean deleteMedicalInformation(MedicalInformation medicalInformation) {
        if(medicalInformationRepository.existsById(medicalInformation.getPersonId())){
            medicalInformationRepository.deleteById(medicalInformation.getPersonId());
            return true;
        }
        return false;
    }

    public MedicalInformation getMedicalInformation(int personId) {
        return medicalInformationRepository.findById(personId).orElse(null);
    }
}

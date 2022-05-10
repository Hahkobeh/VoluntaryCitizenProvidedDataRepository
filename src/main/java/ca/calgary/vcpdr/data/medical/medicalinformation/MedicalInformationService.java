package ca.calgary.vcpdr.data.medical.medicalinformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalInformationService {

    private final MedicalInformationRepository medicalInformationRepository;

    @Autowired
    public MedicalInformationService(MedicalInformationRepository medicalInformationRepository) {
        this.medicalInformationRepository = medicalInformationRepository;
    }
}

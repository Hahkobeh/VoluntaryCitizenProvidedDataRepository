package ca.calgary.vcpdr.data.medicalinformation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalInformationService {
    @Autowired
    private MedicalInformationRepository medicalInformationRepository;
}

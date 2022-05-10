package ca.calgary.vcpdr.data.medical.prescribedmedication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrescribedMedicationService {

    private final PrescribedMedicationRepository prescribedMedicationRepository;

    @Autowired
    public PrescribedMedicationService(PrescribedMedicationRepository prescribedMedicationRepository) {
        this.prescribedMedicationRepository = prescribedMedicationRepository;
    }
}

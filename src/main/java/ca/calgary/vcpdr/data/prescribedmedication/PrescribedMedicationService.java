package ca.calgary.vcpdr.data.prescribedmedication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrescribedMedicationService {
    @Autowired
    private PrescribedMedicationRepository prescribedMedicationRepository;
}

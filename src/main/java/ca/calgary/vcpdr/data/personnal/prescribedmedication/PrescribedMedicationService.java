package ca.calgary.vcpdr.data.personnal.prescribedmedication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PrescribedMedicationService {
    @Autowired
    private PrescribedMedicationRepository prescribedMedicationRepository;

    public PrescribedMedication createPrescribedMedication(PrescribedMedication prescribedMedication) {
        return prescribedMedicationRepository.save(prescribedMedication);
    }

    public boolean deletePrescibedMedication(PrescribedMedication prescribedMedication) {
        PrescribedMedicationPK prescribedMedicationPK = new PrescribedMedicationPK(prescribedMedication.getPersonId(), prescribedMedication.getMedicationGenericProductIdentification());
        if(prescribedMedicationRepository.existsById(prescribedMedicationPK)){
            prescribedMedicationRepository.deleteById(prescribedMedicationPK);
            return true;
        }
        return false;
    }
}

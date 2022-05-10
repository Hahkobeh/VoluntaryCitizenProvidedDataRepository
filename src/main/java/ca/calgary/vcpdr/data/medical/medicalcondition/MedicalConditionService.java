package ca.calgary.vcpdr.data.medical.medicalcondition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalConditionService {

    private final MedicalConditionRepository medicalConditionRepository;

    @Autowired
    public MedicalConditionService(MedicalConditionRepository medicalConditionRepository) {
        this.medicalConditionRepository = medicalConditionRepository;
    }
}

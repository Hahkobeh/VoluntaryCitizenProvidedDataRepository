package ca.calgary.vcpdr.data.personnal.medicalcondition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalConditionService {
    @Autowired
    private MedicalConditionRepository medicalConditionRepository;

    public MedicalCondition createMedicalCondition(MedicalCondition medicalCondition) {
        return medicalConditionRepository.save(medicalCondition);
    }

    public boolean deleteMedicalCondition(MedicalCondition medicalCondition){
        MedicalConditionPK medicalConditionPK = new MedicalConditionPK(medicalCondition.getPersonId(), medicalCondition.getMedicalCondition());
        if(medicalConditionRepository.existsById(medicalConditionPK)){
            medicalConditionRepository.deleteById(medicalConditionPK);
            return true;
        }
        return false;
    }
}

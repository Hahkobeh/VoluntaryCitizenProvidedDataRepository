package ca.calgary.vcpdr.data.medicalcondition;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MedicalConditionService {
    @Autowired
    private MedicalConditionRepository medicalConditionRepository;
}

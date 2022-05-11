package ca.calgary.vcpdr.data.medicalcondition;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalConditionRepository extends CrudRepository<MedicalCondition, MedicalConditionPK> {
}

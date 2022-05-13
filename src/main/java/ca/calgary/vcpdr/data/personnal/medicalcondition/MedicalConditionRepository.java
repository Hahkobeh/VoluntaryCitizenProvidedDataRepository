package ca.calgary.vcpdr.data.personnal.medicalcondition;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalConditionRepository extends CrudRepository<MedicalCondition, MedicalConditionPK> {
}

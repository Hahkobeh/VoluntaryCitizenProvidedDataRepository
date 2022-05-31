package ca.calgary.vcpdr.data.personnal.medicalcondition;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MedicalConditionRepository extends CrudRepository<MedicalCondition, MedicalConditionPK> {
    List<MedicalCondition> findAllByPersonId(int personId);
}

package ca.calgary.vcpdr.data.personnal.prescribedmedication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PrescribedMedicationRepository extends CrudRepository<PrescribedMedication, PrescribedMedicationPK> {
    List<PrescribedMedication> findAllByPersonId(int personId);
}

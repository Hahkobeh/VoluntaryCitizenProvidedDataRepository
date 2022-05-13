package ca.calgary.vcpdr.data.personnal.prescribedmedication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescribedMedicationRepository extends CrudRepository<PrescribedMedication, PrescribedMedicationPK> {
}

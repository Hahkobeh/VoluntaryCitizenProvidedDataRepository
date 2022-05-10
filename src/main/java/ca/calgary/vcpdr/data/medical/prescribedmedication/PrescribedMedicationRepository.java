package ca.calgary.vcpdr.data.medical.prescribedmedication;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PrescribedMedicationRepository extends CrudRepository<PrescribedMedication, PrescribedMedicationPK> {
}

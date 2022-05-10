package ca.calgary.vcpdr.data.medical.medicalinformation;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalInformationRepository extends CrudRepository<MedicalInformation, MedicalInformationPK> {
}

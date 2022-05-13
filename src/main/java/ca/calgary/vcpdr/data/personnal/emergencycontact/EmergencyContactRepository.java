package ca.calgary.vcpdr.data.personnal.emergencycontact;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyContactRepository extends CrudRepository<EmergencyContact, EmergencyContactPK> {
}

package ca.calgary.vcpdr.data.personnal.emergencycontact;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmergencyContactRepository extends CrudRepository<EmergencyContact, EmergencyContactPK> {
    List<EmergencyContact> findAllByPersonId(int personId);
}

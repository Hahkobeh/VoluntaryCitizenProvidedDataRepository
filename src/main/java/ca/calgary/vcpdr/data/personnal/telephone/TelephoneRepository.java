package ca.calgary.vcpdr.data.personnal.telephone;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TelephoneRepository extends CrudRepository<Telephone, TelephonePK> {
    List<Telephone> findAllByPersonId(int personId);
    List<Telephone> findAllByTelephoneNumber(String telephoneNumber);
}

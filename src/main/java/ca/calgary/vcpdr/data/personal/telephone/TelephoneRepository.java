package ca.calgary.vcpdr.data.personal.telephone;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TelephoneRepository extends CrudRepository<Telephone, TelephonePK> {

}

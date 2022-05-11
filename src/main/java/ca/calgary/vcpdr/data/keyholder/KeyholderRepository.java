package ca.calgary.vcpdr.data.keyholder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyholderRepository extends CrudRepository<Keyholder, KeyholderPK> {
}

package ca.calgary.vcpdr.data.location.keyholder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KeyHolderRepository extends CrudRepository<Keyholder, KeyholderPK> {
}

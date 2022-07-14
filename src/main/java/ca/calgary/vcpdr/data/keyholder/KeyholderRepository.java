package ca.calgary.vcpdr.data.keyholder;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KeyholderRepository extends CrudRepository<Keyholder, KeyholderPK> {
    List<Keyholder> findAllByPropertyId(int propertyId);
}

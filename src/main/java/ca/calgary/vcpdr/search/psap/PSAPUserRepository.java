package ca.calgary.vcpdr.search.psap;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PSAPUserRepository extends CrudRepository<PSAPUser, String> {
}

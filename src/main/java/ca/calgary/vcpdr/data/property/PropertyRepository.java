package ca.calgary.vcpdr.data.property;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer> {
}

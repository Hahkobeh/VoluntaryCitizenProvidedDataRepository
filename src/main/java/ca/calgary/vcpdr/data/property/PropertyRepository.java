package ca.calgary.vcpdr.data.property;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer> {
    List<Property> findAllByUserId(int userId);
}

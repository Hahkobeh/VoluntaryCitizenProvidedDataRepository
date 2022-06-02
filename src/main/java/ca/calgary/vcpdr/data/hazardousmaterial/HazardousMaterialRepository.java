package ca.calgary.vcpdr.data.hazardousmaterial;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HazardousMaterialRepository extends CrudRepository<HazardousMaterial, Integer> {
    List<HazardousMaterial> findAllByPropertyId(int propertyId);
}

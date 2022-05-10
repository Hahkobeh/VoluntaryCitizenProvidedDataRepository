package ca.calgary.vcpdr.data.location.hazardousmaterial;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HazardousMaterialRepository extends CrudRepository<HazardousMaterial, HazardousMaterialPK> {
}

package ca.calgary.vcpdr.data.vehicle;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, VehiclePK> {
}

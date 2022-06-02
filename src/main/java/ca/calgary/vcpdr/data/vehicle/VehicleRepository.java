package ca.calgary.vcpdr.data.vehicle;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, VehiclePK> {
    List<Vehicle> findAllByUserId(int userId);
}

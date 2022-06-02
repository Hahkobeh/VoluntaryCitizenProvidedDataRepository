package ca.calgary.vcpdr.data.vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    public List<Vehicle> getVehicles(int userId) {
        return vehicleRepository.findAllByUserId(userId);
    }

    public boolean deleteVehicle(Vehicle vehicle) {
        vehicleRepository.deleteById(new VehiclePK(vehicle.getUserId(), vehicle.getRegistrationPlateIdentification()));
        return true;
    }

    public Vehicle createVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public Vehicle updateVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }
}

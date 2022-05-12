package ca.calgary.vcpdr.data.vehicle;

import javax.persistence.*;

@Entity
@IdClass(VehiclePK.class)
public class Vehicle {
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Id
    @Column(name = "registrationPlateIdentification", nullable = false, length = 10)
    private String registrationPlateIdentification;
    @Basic
    @Column(name = "provinceCode", nullable = true, length = 2)
    private String provinceCode;
    @Basic
    @Column(name = "vehicleExteriorColour", nullable = true, length = 20)
    private String vehicleExteriorColour;
    @Basic
    @Column(name = "vehicleMake", nullable = true, length = 50)
    private String vehicleMake;
    @Basic
    @Column(name = "vehicleModel", nullable = true, length = 50)
    private String vehicleModel;
    @Basic
    @Column(name = "year", nullable = true)
    private Integer year;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getRegistrationPlateIdentification() {
        return registrationPlateIdentification;
    }

    public void setRegistrationPlateIdentification(String registrationPlateIdentification) {
        this.registrationPlateIdentification = registrationPlateIdentification;
    }

    public String getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
    }

    public String getVehicleExteriorColour() {
        return vehicleExteriorColour;
    }

    public void setVehicleExteriorColour(String vehicleExteriorColour) {
        this.vehicleExteriorColour = vehicleExteriorColour;
    }

    public String getVehicleMake() {
        return vehicleMake;
    }

    public void setVehicleMake(String vehicleMake) {
        this.vehicleMake = vehicleMake;
    }

    public String getVehicleModel() {
        return vehicleModel;
    }

    public void setVehicleModel(String vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Vehicle vehicle = (Vehicle) o;

        if (userId != vehicle.userId) return false;
        if (registrationPlateIdentification != null ? !registrationPlateIdentification.equals(vehicle.registrationPlateIdentification) : vehicle.registrationPlateIdentification != null)
            return false;
        if (provinceCode != null ? !provinceCode.equals(vehicle.provinceCode) : vehicle.provinceCode != null)
            return false;
        if (vehicleExteriorColour != null ? !vehicleExteriorColour.equals(vehicle.vehicleExteriorColour) : vehicle.vehicleExteriorColour != null)
            return false;
        if (vehicleMake != null ? !vehicleMake.equals(vehicle.vehicleMake) : vehicle.vehicleMake != null) return false;
        if (vehicleModel != null ? !vehicleModel.equals(vehicle.vehicleModel) : vehicle.vehicleModel != null)
            return false;
        if (year != null ? !year.equals(vehicle.year) : vehicle.year != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (registrationPlateIdentification != null ? registrationPlateIdentification.hashCode() : 0);
        result = 31 * result + (provinceCode != null ? provinceCode.hashCode() : 0);
        result = 31 * result + (vehicleExteriorColour != null ? vehicleExteriorColour.hashCode() : 0);
        result = 31 * result + (vehicleMake != null ? vehicleMake.hashCode() : 0);
        result = 31 * result + (vehicleModel != null ? vehicleModel.hashCode() : 0);
        result = 31 * result + (year != null ? year.hashCode() : 0);
        return result;
    }
}

package ca.calgary.vcpdr.data.vehicle;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class VehiclePK implements Serializable {
    @Column(name = "userID", nullable = false)
    @Id
    private int userId;
    @Column(name = "registrationPlateIdentification", nullable = false, length = 10)
    @Id
    private String registrationPlateIdentification;

    public VehiclePK(int userId, String registrationPlateIdentification) {
        this.userId = userId;
        this.registrationPlateIdentification = registrationPlateIdentification;
    }

    public VehiclePK() {
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        VehiclePK vehiclePK = (VehiclePK) o;

        if (userId != vehiclePK.userId) return false;
        if (registrationPlateIdentification != null ? !registrationPlateIdentification.equals(vehiclePK.registrationPlateIdentification) : vehiclePK.registrationPlateIdentification != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (registrationPlateIdentification != null ? registrationPlateIdentification.hashCode() : 0);
        return result;
    }
}

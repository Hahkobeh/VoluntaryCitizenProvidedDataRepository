package ca.calgary.vcpdr.data.personal.vehicle;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class VehiclePK implements Serializable {
    @Column(name = "userID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @Column(name = "registrationPlateIdentification", nullable = false, length = 10)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String registrationPlateIdentification;

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

        VehiclePK that = (VehiclePK) o;

        if (userId != that.userId) return false;
        if (registrationPlateIdentification != null ? !registrationPlateIdentification.equals(that.registrationPlateIdentification) : that.registrationPlateIdentification != null)
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

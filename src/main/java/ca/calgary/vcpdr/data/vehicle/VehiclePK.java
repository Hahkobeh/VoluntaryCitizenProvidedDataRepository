package ca.calgary.vcpdr.data.vehicle;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class VehiclePK implements Serializable {
    @Column(name = "personID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personId;
    @Column(name = "registrationPlateIdentification", nullable = false, length = 10)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String registrationPlateIdentification;

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
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

        if (personId != vehiclePK.personId) return false;
        if (registrationPlateIdentification != null ? !registrationPlateIdentification.equals(vehiclePK.registrationPlateIdentification) : vehiclePK.registrationPlateIdentification != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (registrationPlateIdentification != null ? registrationPlateIdentification.hashCode() : 0);
        return result;
    }
}

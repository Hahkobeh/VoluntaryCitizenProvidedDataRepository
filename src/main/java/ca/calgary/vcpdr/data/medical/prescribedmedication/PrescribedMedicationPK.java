package ca.calgary.vcpdr.data.medical.prescribedmedication;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class PrescribedMedicationPK implements Serializable {
    @Column(name = "userID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @Column(name = "medicationGenericProductIdentification", nullable = false, length = 255)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String medicationGenericProductIdentification;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getMedicationGenericProductIdentification() {
        return medicationGenericProductIdentification;
    }

    public void setMedicationGenericProductIdentification(String medicationGenericProductIdentification) {
        this.medicationGenericProductIdentification = medicationGenericProductIdentification;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PrescribedMedicationPK that = (PrescribedMedicationPK) o;

        if (userId != that.userId) return false;
        if (medicationGenericProductIdentification != null ? !medicationGenericProductIdentification.equals(that.medicationGenericProductIdentification) : that.medicationGenericProductIdentification != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (medicationGenericProductIdentification != null ? medicationGenericProductIdentification.hashCode() : 0);
        return result;
    }
}

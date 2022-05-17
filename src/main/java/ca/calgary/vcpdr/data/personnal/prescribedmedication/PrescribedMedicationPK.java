package ca.calgary.vcpdr.data.personnal.prescribedmedication;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class PrescribedMedicationPK implements Serializable {
    @Column(name = "personID", nullable = false)
    @Id
    private int personId;
    @Column(name = "medicationGenericProductIdentification", nullable = false, length = 255)
    @Id
    private String medicationGenericProductIdentification;

    public PrescribedMedicationPK(int personId, String medicationGenericProductIdentification) {
        this.personId = personId;
        this.medicationGenericProductIdentification = medicationGenericProductIdentification;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
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

        if (personId != that.personId) return false;
        if (medicationGenericProductIdentification != null ? !medicationGenericProductIdentification.equals(that.medicationGenericProductIdentification) : that.medicationGenericProductIdentification != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (medicationGenericProductIdentification != null ? medicationGenericProductIdentification.hashCode() : 0);
        return result;
    }
}

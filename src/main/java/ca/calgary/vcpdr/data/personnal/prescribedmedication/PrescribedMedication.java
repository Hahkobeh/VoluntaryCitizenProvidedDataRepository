package ca.calgary.vcpdr.data.personnal.prescribedmedication;

import javax.persistence.*;

@Entity
@IdClass(PrescribedMedicationPK.class)
public class PrescribedMedication {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Id
    @Column(name = "medicationGenericProductIdentification", nullable = false, length = 255)
    private String medicationGenericProductIdentification;
    @Basic
    @Column(name = "medicationDoseMeasure", nullable = false, length = 255)
    private String medicationDoseMeasure;

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

    public String getMedicationDoseMeasure() {
        return medicationDoseMeasure;
    }

    public void setMedicationDoseMeasure(String medicationDoseMeasure) {
        this.medicationDoseMeasure = medicationDoseMeasure;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PrescribedMedication that = (PrescribedMedication) o;

        if (personId != that.personId) return false;
        if (medicationGenericProductIdentification != null ? !medicationGenericProductIdentification.equals(that.medicationGenericProductIdentification) : that.medicationGenericProductIdentification != null)
            return false;
        if (medicationDoseMeasure != null ? !medicationDoseMeasure.equals(that.medicationDoseMeasure) : that.medicationDoseMeasure != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (medicationGenericProductIdentification != null ? medicationGenericProductIdentification.hashCode() : 0);
        result = 31 * result + (medicationDoseMeasure != null ? medicationDoseMeasure.hashCode() : 0);
        return result;
    }
}

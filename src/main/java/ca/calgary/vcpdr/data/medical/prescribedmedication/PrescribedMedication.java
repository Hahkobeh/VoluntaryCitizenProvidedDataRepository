package ca.calgary.vcpdr.data.medical.prescribedmedication;

import javax.persistence.*;

@Entity
@IdClass(PrescribedMedicationPK.class)
@Table(name="prescribedmedications")
public class PrescribedMedication {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Basic
    @Column(name = "dependentID", nullable = false)
    private int dependentId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "medicationGenericProductIdentification", nullable = false, length = 255)
    private String medicationGenericProductIdentification;
    @Basic
    @Column(name = "medicationDoseMeasure", nullable = false, length = 255)
    private String medicationDoseMeasure;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getDependentId() {
        return dependentId;
    }

    public void setDependentId(int dependentId) {
        this.dependentId = dependentId;
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

        if (userId != that.userId) return false;
        if (dependentId != that.dependentId) return false;
        if (medicationGenericProductIdentification != null ? !medicationGenericProductIdentification.equals(that.medicationGenericProductIdentification) : that.medicationGenericProductIdentification != null)
            return false;
        if (medicationDoseMeasure != null ? !medicationDoseMeasure.equals(that.medicationDoseMeasure) : that.medicationDoseMeasure != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + dependentId;
        result = 31 * result + (medicationGenericProductIdentification != null ? medicationGenericProductIdentification.hashCode() : 0);
        result = 31 * result + (medicationDoseMeasure != null ? medicationDoseMeasure.hashCode() : 0);
        return result;
    }
}

package ca.calgary.vcpdr.data.medicalcondition;

import javax.persistence.*;

@Entity
@IdClass(MedicalConditionPK.class)
public class MedicalCondition {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "medicalCondition", nullable = false, length = 255)
    private String medicalCondition;
    @Basic
    @Column(name = "severity", nullable = true, length = 255)
    private String severity;
    @Basic
    @Column(name = "additionalInformation", nullable = true, length = 500)
    private String additionalInformation;

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getMedicalCondition() {
        return medicalCondition;
    }

    public void setMedicalCondition(String medicalCondition) {
        this.medicalCondition = medicalCondition;
    }

    public String getSeverity() {
        return severity;
    }

    public void setSeverity(String severity) {
        this.severity = severity;
    }

    public String getAdditionalInformation() {
        return additionalInformation;
    }

    public void setAdditionalInformation(String additionalInformation) {
        this.additionalInformation = additionalInformation;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MedicalCondition that = (MedicalCondition) o;

        if (personId != that.personId) return false;
        if (medicalCondition != null ? !medicalCondition.equals(that.medicalCondition) : that.medicalCondition != null)
            return false;
        if (severity != null ? !severity.equals(that.severity) : that.severity != null) return false;
        if (additionalInformation != null ? !additionalInformation.equals(that.additionalInformation) : that.additionalInformation != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (medicalCondition != null ? medicalCondition.hashCode() : 0);
        result = 31 * result + (severity != null ? severity.hashCode() : 0);
        result = 31 * result + (additionalInformation != null ? additionalInformation.hashCode() : 0);
        return result;
    }
}

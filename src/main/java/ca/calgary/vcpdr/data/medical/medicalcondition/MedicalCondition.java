package ca.calgary.vcpdr.data.medical.medicalcondition;

import javax.persistence.*;

@Entity
@IdClass(MedicalConditionPK.class)
@Table(name="medicalconditions")
public class MedicalCondition {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Basic
    @Column(name = "dependentID", nullable = false)
    private int dependentId;
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

        if (userId != that.userId) return false;
        if (dependentId != that.dependentId) return false;
        if (medicalCondition != null ? !medicalCondition.equals(that.medicalCondition) : that.medicalCondition != null)
            return false;
        if (severity != null ? !severity.equals(that.severity) : that.severity != null) return false;
        if (additionalInformation != null ? !additionalInformation.equals(that.additionalInformation) : that.additionalInformation != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + dependentId;
        result = 31 * result + (medicalCondition != null ? medicalCondition.hashCode() : 0);
        result = 31 * result + (severity != null ? severity.hashCode() : 0);
        result = 31 * result + (additionalInformation != null ? additionalInformation.hashCode() : 0);
        return result;
    }
}

package ca.calgary.vcpdr.data.personnal.medicalcondition;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class MedicalConditionPK implements Serializable {
    @Column(name = "personID", nullable = false)
    @Id
    private int personId;
    @Column(name = "medicalCondition", nullable = false, length = 255)
    @Id
    private String medicalCondition;

    public MedicalConditionPK(int personId, String medicalCondition) {
        this.personId = personId;
        this.medicalCondition = medicalCondition;
    }

    public MedicalConditionPK(){}

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MedicalConditionPK that = (MedicalConditionPK) o;

        if (personId != that.personId) return false;
        if (medicalCondition != null ? !medicalCondition.equals(that.medicalCondition) : that.medicalCondition != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (medicalCondition != null ? medicalCondition.hashCode() : 0);
        return result;
    }
}

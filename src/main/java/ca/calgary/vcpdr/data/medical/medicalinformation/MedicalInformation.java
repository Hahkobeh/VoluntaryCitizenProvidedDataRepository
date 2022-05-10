package ca.calgary.vcpdr.data.medical.medicalinformation;

import javax.persistence.*;

@Entity
@IdClass(MedicalInformationPK.class)
public class MedicalInformation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "dependentID", nullable = false)
    private int dependentId;
    @Basic
    @Column(name = "healthCareNumber", nullable = true, length = 20)
    private String healthCareNumber;
    @Basic
    @Column(name = "provinceCode", nullable = true, length = 2)
    private String provinceCode;
    @Basic
    @Column(name = "personBloodTypeCode", nullable = true, length = 2)
    private String personBloodTypeCode;
    @Basic
    @Column(name = "personRhType", nullable = true)
    private Byte personRhType;
    @Basic
    @Column(name = "isPregnant", nullable = true)
    private Byte isPregnant;

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

    public String getHealthCareNumber() {
        return healthCareNumber;
    }

    public void setHealthCareNumber(String healthCareNumber) {
        this.healthCareNumber = healthCareNumber;
    }

    public String getProvinceCode() {
        return provinceCode;
    }

    public void setProvinceCode(String provinceCode) {
        this.provinceCode = provinceCode;
    }

    public String getPersonBloodTypeCode() {
        return personBloodTypeCode;
    }

    public void setPersonBloodTypeCode(String personBloodTypeCode) {
        this.personBloodTypeCode = personBloodTypeCode;
    }

    public Byte getPersonRhType() {
        return personRhType;
    }

    public void setPersonRhType(Byte personRhType) {
        this.personRhType = personRhType;
    }

    public Byte getIsPregnant() {
        return isPregnant;
    }

    public void setIsPregnant(Byte isPregnant) {
        this.isPregnant = isPregnant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        MedicalInformation that = (MedicalInformation) o;

        if (userId != that.userId) return false;
        if (dependentId != that.dependentId) return false;
        if (healthCareNumber != null ? !healthCareNumber.equals(that.healthCareNumber) : that.healthCareNumber != null)
            return false;
        if (provinceCode != null ? !provinceCode.equals(that.provinceCode) : that.provinceCode != null) return false;
        if (personBloodTypeCode != null ? !personBloodTypeCode.equals(that.personBloodTypeCode) : that.personBloodTypeCode != null)
            return false;
        if (personRhType != null ? !personRhType.equals(that.personRhType) : that.personRhType != null) return false;
        if (isPregnant != null ? !isPregnant.equals(that.isPregnant) : that.isPregnant != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + dependentId;
        result = 31 * result + (healthCareNumber != null ? healthCareNumber.hashCode() : 0);
        result = 31 * result + (provinceCode != null ? provinceCode.hashCode() : 0);
        result = 31 * result + (personBloodTypeCode != null ? personBloodTypeCode.hashCode() : 0);
        result = 31 * result + (personRhType != null ? personRhType.hashCode() : 0);
        result = 31 * result + (isPregnant != null ? isPregnant.hashCode() : 0);
        return result;
    }
}

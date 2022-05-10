package ca.calgary.vcpdr.data.personal.dependents;

import javax.persistence.*;
import java.sql.Date;

@Entity
@IdClass(DependentPK.class)
@Table(name="dependents")
public class Dependent {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "dependentID", nullable = false)
    private int dependentId;
    @Basic
    @Column(name = "personGivenName", nullable = false, length = 255)
    private String personGivenName;
    @Basic
    @Column(name = "personSurName", nullable = false, length = 255)
    private String personSurName;
    @Basic
    @Column(name = "dependentType", nullable = false, length = 10)
    private String dependentType;
    @Basic
    @Column(name = "personBirthDate", nullable = true)
    private Date personBirthDate;
    @Basic
    @Column(name = "personSexCode", nullable = true, length = 1)
    private String personSexCode;
    @Basic
    @Column(name = "personPrimaryLanguage", nullable = true, length = 255)
    private String personPrimaryLanguage;
    @Basic
    @Column(name = "personSecondaryLanguage", nullable = true, length = 255)
    private String personSecondaryLanguage;
    @Basic
    @Column(name = "wheelchair", nullable = true)
    private Byte wheelchair;

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

    public String getPersonGivenName() {
        return personGivenName;
    }

    public void setPersonGivenName(String personGivenName) {
        this.personGivenName = personGivenName;
    }

    public String getPersonSurName() {
        return personSurName;
    }

    public void setPersonSurName(String personSurName) {
        this.personSurName = personSurName;
    }

    public String getDependentType() {
        return dependentType;
    }

    public void setDependentType(String dependentType) {
        this.dependentType = dependentType;
    }

    public Date getPersonBirthDate() {
        return personBirthDate;
    }

    public void setPersonBirthDate(Date personBirthDate) {
        this.personBirthDate = personBirthDate;
    }

    public String getPersonSexCode() {
        return personSexCode;
    }

    public void setPersonSexCode(String personSexCode) {
        this.personSexCode = personSexCode;
    }

    public String getPersonPrimaryLanguage() {
        return personPrimaryLanguage;
    }

    public void setPersonPrimaryLanguage(String personPrimaryLanguage) {
        this.personPrimaryLanguage = personPrimaryLanguage;
    }

    public String getPersonSecondaryLanguage() {
        return personSecondaryLanguage;
    }

    public void setPersonSecondaryLanguage(String personSecondaryLanguage) {
        this.personSecondaryLanguage = personSecondaryLanguage;
    }

    public Byte getWheelchair() {
        return wheelchair;
    }

    public void setWheelchair(Byte wheelchair) {
        this.wheelchair = wheelchair;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Dependent that = (Dependent) o;

        if (userId != that.userId) return false;
        if (dependentId != that.dependentId) return false;
        if (personGivenName != null ? !personGivenName.equals(that.personGivenName) : that.personGivenName != null)
            return false;
        if (personSurName != null ? !personSurName.equals(that.personSurName) : that.personSurName != null)
            return false;
        if (dependentType != null ? !dependentType.equals(that.dependentType) : that.dependentType != null)
            return false;
        if (personBirthDate != null ? !personBirthDate.equals(that.personBirthDate) : that.personBirthDate != null)
            return false;
        if (personSexCode != null ? !personSexCode.equals(that.personSexCode) : that.personSexCode != null)
            return false;
        if (personPrimaryLanguage != null ? !personPrimaryLanguage.equals(that.personPrimaryLanguage) : that.personPrimaryLanguage != null)
            return false;
        if (personSecondaryLanguage != null ? !personSecondaryLanguage.equals(that.personSecondaryLanguage) : that.personSecondaryLanguage != null)
            return false;
        if (wheelchair != null ? !wheelchair.equals(that.wheelchair) : that.wheelchair != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + dependentId;
        result = 31 * result + (personGivenName != null ? personGivenName.hashCode() : 0);
        result = 31 * result + (personSurName != null ? personSurName.hashCode() : 0);
        result = 31 * result + (dependentType != null ? dependentType.hashCode() : 0);
        result = 31 * result + (personBirthDate != null ? personBirthDate.hashCode() : 0);
        result = 31 * result + (personSexCode != null ? personSexCode.hashCode() : 0);
        result = 31 * result + (personPrimaryLanguage != null ? personPrimaryLanguage.hashCode() : 0);
        result = 31 * result + (personSecondaryLanguage != null ? personSecondaryLanguage.hashCode() : 0);
        result = 31 * result + (wheelchair != null ? wheelchair.hashCode() : 0);
        return result;
    }
}

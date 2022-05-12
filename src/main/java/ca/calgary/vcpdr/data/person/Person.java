package ca.calgary.vcpdr.data.person;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Person {
    @Basic
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Basic
    @Column(name = "personGivenName", nullable = false, length = 255)
    private String personGivenName;
    @Basic
    @Column(name = "personSurName", nullable = false, length = 255)
    private String personSurName;
    @Basic
    @Column(name = "personMaidenName", nullable = true, length = 255)
    private String personMaidenName;
    @Basic
    @Column(name = "personMiddleName", nullable = true, length = 255)
    private String personMiddleName;
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
    @Basic
    @Column(name = "licenseNumber", nullable = true, length = 255)
    private String licenseNumber;
    @Basic
    @Column(name = "licenseProvince", nullable = true, length = 2)
    private String licenseProvince;

    public Person(int userId, String personGivenName, String personSurName) {
        this.userId = userId;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
    }

    public Person() {

    }

    @Override
    public String toString() {
        return "Person{" +
                "userId=" + userId +
                ", personId=" + personId +
                ", personGivenName='" + personGivenName + '\'' +
                ", personSurName='" + personSurName + '\'' +
                ", personMaidenName='" + personMaidenName + '\'' +
                ", personMiddleName='" + personMiddleName + '\'' +
                ", personBirthDate=" + personBirthDate +
                ", personSexCode='" + personSexCode + '\'' +
                ", personPrimaryLanguage='" + personPrimaryLanguage + '\'' +
                ", personSecondaryLanguage='" + personSecondaryLanguage + '\'' +
                ", wheelchair=" + wheelchair +
                ", licenseNumber='" + licenseNumber + '\'' +
                ", licenseProvince='" + licenseProvince + '\'' +
                '}';
    }


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
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

    public String getPersonMaidenName() {
        return personMaidenName;
    }

    public void setPersonMaidenName(String personMaidenName) {
        this.personMaidenName = personMaidenName;
    }

    public String getPersonMiddleName() {
        return personMiddleName;
    }

    public void setPersonMiddleName(String personMiddleName) {
        this.personMiddleName = personMiddleName;
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

    public String getLicenseNumber() {
        return licenseNumber;
    }

    public void setLicenseNumber(String licenseNumber) {
        this.licenseNumber = licenseNumber;
    }

    public String getLicenseProvince() {
        return licenseProvince;
    }

    public void setLicenseProvince(String licenseProvince) {
        this.licenseProvince = licenseProvince;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Person person = (Person) o;

        if (userId != person.userId) return false;
        if (personId != person.personId) return false;
        if (personGivenName != null ? !personGivenName.equals(person.personGivenName) : person.personGivenName != null)
            return false;
        if (personSurName != null ? !personSurName.equals(person.personSurName) : person.personSurName != null)
            return false;
        if (personMaidenName != null ? !personMaidenName.equals(person.personMaidenName) : person.personMaidenName != null)
            return false;
        if (personMiddleName != null ? !personMiddleName.equals(person.personMiddleName) : person.personMiddleName != null)
            return false;
        if (personBirthDate != null ? !personBirthDate.equals(person.personBirthDate) : person.personBirthDate != null)
            return false;
        if (personSexCode != null ? !personSexCode.equals(person.personSexCode) : person.personSexCode != null)
            return false;
        if (personPrimaryLanguage != null ? !personPrimaryLanguage.equals(person.personPrimaryLanguage) : person.personPrimaryLanguage != null)
            return false;
        if (personSecondaryLanguage != null ? !personSecondaryLanguage.equals(person.personSecondaryLanguage) : person.personSecondaryLanguage != null)
            return false;
        if (wheelchair != null ? !wheelchair.equals(person.wheelchair) : person.wheelchair != null) return false;
        if (licenseNumber != null ? !licenseNumber.equals(person.licenseNumber) : person.licenseNumber != null)
            return false;
        if (licenseProvince != null ? !licenseProvince.equals(person.licenseProvince) : person.licenseProvince != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + personId;
        result = 31 * result + (personGivenName != null ? personGivenName.hashCode() : 0);
        result = 31 * result + (personSurName != null ? personSurName.hashCode() : 0);
        result = 31 * result + (personMaidenName != null ? personMaidenName.hashCode() : 0);
        result = 31 * result + (personMiddleName != null ? personMiddleName.hashCode() : 0);
        result = 31 * result + (personBirthDate != null ? personBirthDate.hashCode() : 0);
        result = 31 * result + (personSexCode != null ? personSexCode.hashCode() : 0);
        result = 31 * result + (personPrimaryLanguage != null ? personPrimaryLanguage.hashCode() : 0);
        result = 31 * result + (personSecondaryLanguage != null ? personSecondaryLanguage.hashCode() : 0);
        result = 31 * result + (wheelchair != null ? wheelchair.hashCode() : 0);
        result = 31 * result + (licenseNumber != null ? licenseNumber.hashCode() : 0);
        result = 31 * result + (licenseProvince != null ? licenseProvince.hashCode() : 0);
        return result;
    }
}

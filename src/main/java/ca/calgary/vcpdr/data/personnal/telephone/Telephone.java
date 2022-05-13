package ca.calgary.vcpdr.data.personnal.telephone;

import javax.persistence.*;

@Entity
@IdClass(TelephonePK.class)
public class Telephone {
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Id
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    private String telephoneNumber;
    @Basic
    @Column(name = "telephoneType", nullable = false, length = 20)
    private String telephoneType;

    @Basic
    @Column(name = "verified", nullable = false)
    private boolean verified;

    public Telephone() {
    }

    public Telephone(int personId, String telephoneNumber, String telephoneType) {
        this.personId = personId;
        this.telephoneNumber = telephoneNumber;
        this.telephoneType = telephoneType;
        this.verified = false;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getTelephoneType() {
        return telephoneType;
    }

    public void setTelephoneType(String telephoneType) {
        this.telephoneType = telephoneType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Telephone telephone = (Telephone) o;

        if (personId != telephone.personId) return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(telephone.telephoneNumber) : telephone.telephoneNumber != null)
            return false;
        if (telephoneType != null ? !telephoneType.equals(telephone.telephoneType) : telephone.telephoneType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        result = 31 * result + (telephoneType != null ? telephoneType.hashCode() : 0);
        return result;
    }
}

package ca.calgary.vcpdr.data.personnal.emergencycontact;

import javax.persistence.*;

@Entity
@IdClass(EmergencyContactPK.class)
public class EmergencyContact {
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Basic
    @Column(name = "personFullName", nullable = false, length = 255)
    private String personFullName;
    @Id
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    private String telephoneNumber;

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getPersonFullName() {
        return personFullName;
    }

    public void setPersonFullName(String personFullName) {
        this.personFullName = personFullName;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EmergencyContact that = (EmergencyContact) o;

        if (personId != that.personId) return false;
        if (personFullName != null ? !personFullName.equals(that.personFullName) : that.personFullName != null)
            return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(that.telephoneNumber) : that.telephoneNumber != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (personFullName != null ? personFullName.hashCode() : 0);
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        return result;
    }
}

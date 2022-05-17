package ca.calgary.vcpdr.data.personnal.emergencycontact;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class EmergencyContactPK implements Serializable {
    @Column(name = "personID", nullable = false)
    @Id
    private int personId;
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    @Id
    private String telephoneNumber;

    public EmergencyContactPK(int personId, String telephoneNumber) {
        this.personId = personId;
        this.telephoneNumber = telephoneNumber;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        EmergencyContactPK that = (EmergencyContactPK) o;

        if (personId != that.personId) return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(that.telephoneNumber) : that.telephoneNumber != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        return result;
    }
}

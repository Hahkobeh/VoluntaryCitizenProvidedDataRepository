package ca.calgary.vcpdr.data.personal.emergencycontact;


import javax.persistence.*;

@Entity
@IdClass(EmergencyContactPK.class)
@Table(name="emergencycontacts")
public class EmergencyContact {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Basic
    @Column(name = "personFullName", nullable = false, length = 255)
    private String personFullName;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    private String telephoneNumber;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

        if (userId != that.userId) return false;
        if (personFullName != null ? !personFullName.equals(that.personFullName) : that.personFullName != null)
            return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(that.telephoneNumber) : that.telephoneNumber != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (personFullName != null ? personFullName.hashCode() : 0);
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        return result;
    }
}

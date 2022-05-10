package ca.calgary.vcpdr.data.personal.telephone;

import javax.persistence.*;

@Entity
@IdClass(TelephonePK.class)
@Table(name="telephones")
public class Telephone {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    private String telephoneNumber;
    @Basic
    @Column(name = "telephoneType", nullable = false, length = 20)
    private String telephoneType;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

        Telephone that = (Telephone) o;

        if (userId != that.userId) return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(that.telephoneNumber) : that.telephoneNumber != null)
            return false;
        if (telephoneType != null ? !telephoneType.equals(that.telephoneType) : that.telephoneType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        result = 31 * result + (telephoneType != null ? telephoneType.hashCode() : 0);
        return result;
    }
}

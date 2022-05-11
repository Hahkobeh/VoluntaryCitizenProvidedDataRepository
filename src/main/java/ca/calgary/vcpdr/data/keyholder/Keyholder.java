package ca.calgary.vcpdr.data.keyholder;

import javax.persistence.*;

@Entity
@IdClass(KeyholderPK.class)
public class Keyholder {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "addressID", nullable = false)
    private int addressId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "personFullName", nullable = false, length = 255)
    private String personFullName;
    @Basic
    @Column(name = "telephoneNumber", nullable = false, length = 10)
    private String telephoneNumber;

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
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

        Keyholder keyholder = (Keyholder) o;

        if (addressId != keyholder.addressId) return false;
        if (personFullName != null ? !personFullName.equals(keyholder.personFullName) : keyholder.personFullName != null)
            return false;
        if (telephoneNumber != null ? !telephoneNumber.equals(keyholder.telephoneNumber) : keyholder.telephoneNumber != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = addressId;
        result = 31 * result + (personFullName != null ? personFullName.hashCode() : 0);
        result = 31 * result + (telephoneNumber != null ? telephoneNumber.hashCode() : 0);
        return result;
    }
}

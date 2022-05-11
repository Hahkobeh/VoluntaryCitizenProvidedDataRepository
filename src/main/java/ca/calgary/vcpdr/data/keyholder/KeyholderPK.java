package ca.calgary.vcpdr.data.keyholder;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class KeyholderPK implements Serializable {
    @Column(name = "addressID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;
    @Column(name = "personFullName", nullable = false, length = 255)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String personFullName;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        KeyholderPK that = (KeyholderPK) o;

        if (addressId != that.addressId) return false;
        if (personFullName != null ? !personFullName.equals(that.personFullName) : that.personFullName != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = addressId;
        result = 31 * result + (personFullName != null ? personFullName.hashCode() : 0);
        return result;
    }
}

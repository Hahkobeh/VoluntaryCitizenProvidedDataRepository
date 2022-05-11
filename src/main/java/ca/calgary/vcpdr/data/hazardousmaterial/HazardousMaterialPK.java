package ca.calgary.vcpdr.data.hazardousmaterial;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class HazardousMaterialPK implements Serializable {
    @Column(name = "addressID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int addressId;
    @Column(name = "commonName", nullable = false, length = 255)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String commonName;

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HazardousMaterialPK that = (HazardousMaterialPK) o;

        if (addressId != that.addressId) return false;
        if (commonName != null ? !commonName.equals(that.commonName) : that.commonName != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = addressId;
        result = 31 * result + (commonName != null ? commonName.hashCode() : 0);
        return result;
    }
}

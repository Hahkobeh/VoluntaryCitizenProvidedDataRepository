package ca.calgary.vcpdr.data.property;

import javax.persistence.*;

@Entity
public class Property {
    @Basic
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "addressID", nullable = false)
    private int addressId;
    @Basic
    @Column(name = "A1", nullable = false, length = 2)
    private String a1;
    @Basic
    @Column(name = "A3", nullable = false, length = 30)
    private String a3;
    @Basic
    @Column(name = "RD", nullable = false, length = 30)
    private String rd;
    @Basic
    @Column(name = "STS", nullable = false, length = 10)
    private String sts;
    @Basic
    @Column(name = "HNO", nullable = false, length = 10)
    private String hno;
    @Basic
    @Column(name = "HNS", nullable = true, length = 10)
    private String hns;
    @Basic
    @Column(name = "POD", nullable = true, length = 2)
    private String pod;
    @Basic
    @Column(name = "PC", nullable = true, length = 6)
    private String pc;
    @Basic
    @Column(name = "propertyType", nullable = true, length = 255)
    private String propertyType;
    @Basic
    @Column(name = "gasShutOffLocation", nullable = true, length = 255)
    private String gasShutOffLocation;
    @Basic
    @Column(name = "electricityProvider", nullable = true, length = 255)
    private String electricityProvider;
    @Basic
    @Column(name = "gasProvider", nullable = true, length = 255)
    private String gasProvider;
    @Basic
    @Column(name = "waterProvider", nullable = true, length = 255)
    private String waterProvider;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getAddressId() {
        return addressId;
    }

    public void setAddressId(int addressId) {
        this.addressId = addressId;
    }

    public String getA1() {
        return a1;
    }

    public void setA1(String a1) {
        this.a1 = a1;
    }

    public String getA3() {
        return a3;
    }

    public void setA3(String a3) {
        this.a3 = a3;
    }

    public String getRd() {
        return rd;
    }

    public void setRd(String rd) {
        this.rd = rd;
    }

    public String getSts() {
        return sts;
    }

    public void setSts(String sts) {
        this.sts = sts;
    }

    public String getHno() {
        return hno;
    }

    public void setHno(String hno) {
        this.hno = hno;
    }

    public String getHns() {
        return hns;
    }

    public void setHns(String hns) {
        this.hns = hns;
    }

    public String getPod() {
        return pod;
    }

    public void setPod(String pod) {
        this.pod = pod;
    }

    public String getPc() {
        return pc;
    }

    public void setPc(String pc) {
        this.pc = pc;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public String getGasShutOffLocation() {
        return gasShutOffLocation;
    }

    public void setGasShutOffLocation(String gasShutOffLocation) {
        this.gasShutOffLocation = gasShutOffLocation;
    }

    public String getElectricityProvider() {
        return electricityProvider;
    }

    public void setElectricityProvider(String electricityProvider) {
        this.electricityProvider = electricityProvider;
    }

    public String getGasProvider() {
        return gasProvider;
    }

    public void setGasProvider(String gasProvider) {
        this.gasProvider = gasProvider;
    }

    public String getWaterProvider() {
        return waterProvider;
    }

    public void setWaterProvider(String waterProvider) {
        this.waterProvider = waterProvider;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Property property = (Property) o;

        if (userId != property.userId) return false;
        if (addressId != property.addressId) return false;
        if (a1 != null ? !a1.equals(property.a1) : property.a1 != null) return false;
        if (a3 != null ? !a3.equals(property.a3) : property.a3 != null) return false;
        if (rd != null ? !rd.equals(property.rd) : property.rd != null) return false;
        if (sts != null ? !sts.equals(property.sts) : property.sts != null) return false;
        if (hno != null ? !hno.equals(property.hno) : property.hno != null) return false;
        if (hns != null ? !hns.equals(property.hns) : property.hns != null) return false;
        if (pod != null ? !pod.equals(property.pod) : property.pod != null) return false;
        if (pc != null ? !pc.equals(property.pc) : property.pc != null) return false;
        if (propertyType != null ? !propertyType.equals(property.propertyType) : property.propertyType != null)
            return false;
        if (gasShutOffLocation != null ? !gasShutOffLocation.equals(property.gasShutOffLocation) : property.gasShutOffLocation != null)
            return false;
        if (electricityProvider != null ? !electricityProvider.equals(property.electricityProvider) : property.electricityProvider != null)
            return false;
        if (gasProvider != null ? !gasProvider.equals(property.gasProvider) : property.gasProvider != null)
            return false;
        if (waterProvider != null ? !waterProvider.equals(property.waterProvider) : property.waterProvider != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + addressId;
        result = 31 * result + (a1 != null ? a1.hashCode() : 0);
        result = 31 * result + (a3 != null ? a3.hashCode() : 0);
        result = 31 * result + (rd != null ? rd.hashCode() : 0);
        result = 31 * result + (sts != null ? sts.hashCode() : 0);
        result = 31 * result + (hno != null ? hno.hashCode() : 0);
        result = 31 * result + (hns != null ? hns.hashCode() : 0);
        result = 31 * result + (pod != null ? pod.hashCode() : 0);
        result = 31 * result + (pc != null ? pc.hashCode() : 0);
        result = 31 * result + (propertyType != null ? propertyType.hashCode() : 0);
        result = 31 * result + (gasShutOffLocation != null ? gasShutOffLocation.hashCode() : 0);
        result = 31 * result + (electricityProvider != null ? electricityProvider.hashCode() : 0);
        result = 31 * result + (gasProvider != null ? gasProvider.hashCode() : 0);
        result = 31 * result + (waterProvider != null ? waterProvider.hashCode() : 0);
        return result;
    }
}

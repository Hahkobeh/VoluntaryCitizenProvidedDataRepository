package ca.calgary.vcpdr.data.hazardousmaterial;

import javax.persistence.*;

@Entity
public class HazardousMaterial {
    @Basic
    @Column(name = "propertyID", nullable = false)
    private int propertyId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "hazardousMaterialID", nullable = false)
    private int hazardousMaterialId;
    @Basic
    @Column(name = "commonName", nullable = false, length = 255)
    private String commonName;
    @Basic
    @Column(name = "substanceCategory", nullable = true, length = 255)
    private String substanceCategory;
    @Basic
    @Column(name = "substanceContainer", nullable = true, length = 255)
    private String substanceContainer;
    @Basic
    @Column(name = "UNHazmatCode", nullable = true)
    private Integer unHazmatCode;
    @Basic
    @Column(name = "location", nullable = true, length = 255)
    private String location;
    @Basic
    @Column(name = "quantity", nullable = true, length = 255)
    private String quantity;

    public int getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(int propertyId) {
        this.propertyId = propertyId;
    }

    public int getHazardousMaterialId() {
        return hazardousMaterialId;
    }

    public void setHazardousMaterialId(int hazardousMaterialId) {
        this.hazardousMaterialId = hazardousMaterialId;
    }

    public String getCommonName() {
        return commonName;
    }

    public void setCommonName(String commonName) {
        this.commonName = commonName;
    }

    public String getSubstanceCategory() {
        return substanceCategory;
    }

    public void setSubstanceCategory(String substanceCategory) {
        this.substanceCategory = substanceCategory;
    }

    public String getSubstanceContainer() {
        return substanceContainer;
    }

    public void setSubstanceContainer(String substanceContainer) {
        this.substanceContainer = substanceContainer;
    }

    public Integer getUnHazmatCode() {
        return unHazmatCode;
    }

    public void setUnHazmatCode(Integer unHazmatCode) {
        this.unHazmatCode = unHazmatCode;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        HazardousMaterial that = (HazardousMaterial) o;

        if (propertyId != that.propertyId) return false;
        if (hazardousMaterialId != that.hazardousMaterialId) return false;
        if (commonName != null ? !commonName.equals(that.commonName) : that.commonName != null) return false;
        if (substanceCategory != null ? !substanceCategory.equals(that.substanceCategory) : that.substanceCategory != null)
            return false;
        if (substanceContainer != null ? !substanceContainer.equals(that.substanceContainer) : that.substanceContainer != null)
            return false;
        if (unHazmatCode != null ? !unHazmatCode.equals(that.unHazmatCode) : that.unHazmatCode != null) return false;
        if (location != null ? !location.equals(that.location) : that.location != null) return false;
        if (quantity != null ? !quantity.equals(that.quantity) : that.quantity != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = propertyId;
        result = 31 * result + hazardousMaterialId;
        result = 31 * result + (commonName != null ? commonName.hashCode() : 0);
        result = 31 * result + (substanceCategory != null ? substanceCategory.hashCode() : 0);
        result = 31 * result + (substanceContainer != null ? substanceContainer.hashCode() : 0);
        result = 31 * result + (unHazmatCode != null ? unHazmatCode.hashCode() : 0);
        result = 31 * result + (location != null ? location.hashCode() : 0);
        result = 31 * result + (quantity != null ? quantity.hashCode() : 0);
        return result;
    }
}

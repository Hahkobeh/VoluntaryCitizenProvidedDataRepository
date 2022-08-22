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
    @Column(name = "UNHazmatCode", nullable = true, length = 6)
    private String unHazmatCode;
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

    public String getUnHazmatCode() {
        return unHazmatCode;
    }

    public void setUnHazmatCode(String unHazmatCode) {
        this.unHazmatCode = unHazmatCode;
    }
}

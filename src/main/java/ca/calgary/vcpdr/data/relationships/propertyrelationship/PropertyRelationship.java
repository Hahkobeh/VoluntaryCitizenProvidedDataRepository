package ca.calgary.vcpdr.data.relationships.propertyrelationship;

import javax.persistence.*;

@Entity
@IdClass(PropertyRelationshipPK.class)
public class PropertyRelationship {
    @Id
    @Column(name = "propertyID", nullable = false)
    private int propertyId;
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Basic
    @Column(name = "keyholder", nullable = false)
    private byte keyholder;
    @Basic
    @Column(name = "relationshipType", nullable = true, length = 40)
    private String relationshipType;

    public int getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(int propertyId) {
        this.propertyId = propertyId;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public byte getKeyholder() {
        return keyholder;
    }

    public void setKeyholder(byte keyholder) {
        this.keyholder = keyholder;
    }

    public String getRelationshipType() {
        return relationshipType;
    }

    public void setRelationshipType(String relationshipType) {
        this.relationshipType = relationshipType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PropertyRelationship that = (PropertyRelationship) o;

        if (propertyId != that.propertyId) return false;
        if (personId != that.personId) return false;
        if (keyholder != that.keyholder) return false;
        if (relationshipType != null ? !relationshipType.equals(that.relationshipType) : that.relationshipType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = propertyId;
        result = 31 * result + personId;
        result = 31 * result + (int) keyholder;
        result = 31 * result + (relationshipType != null ? relationshipType.hashCode() : 0);
        return result;
    }
}

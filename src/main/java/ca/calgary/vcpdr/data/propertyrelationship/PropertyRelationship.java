package ca.calgary.vcpdr.data.propertyrelationship;

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


    public PropertyRelationship(){}

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


}

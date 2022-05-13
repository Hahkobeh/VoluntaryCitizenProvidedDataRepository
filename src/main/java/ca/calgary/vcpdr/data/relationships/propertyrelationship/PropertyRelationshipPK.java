package ca.calgary.vcpdr.data.relationships.propertyrelationship;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;

public class PropertyRelationshipPK implements Serializable {
    @Column(name = "propertyID", nullable = false)
    @Id
    private int propertyId;
    @Column(name = "personID", nullable = false)
    @Id
    private int personId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PropertyRelationshipPK that = (PropertyRelationshipPK) o;

        if (propertyId != that.propertyId) return false;
        if (personId != that.personId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = propertyId;
        result = 31 * result + personId;
        return result;
    }
}

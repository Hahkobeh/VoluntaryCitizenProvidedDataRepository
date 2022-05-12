package ca.calgary.vcpdr.data.personrelationship;

import javax.persistence.*;

@Entity
@IdClass(PersonRelationshipPK.class)
public class PersonRelationship {
    @Id
    @Column(name = "personID1", nullable = false)
    private int personId1;
    @Id
    @Column(name = "personID2", nullable = false)
    private int personId2;
    @Basic
    @Column(name = "relationshipType", nullable = false, length = 255)
    private String relationshipType;

    public int getPersonId1() {
        return personId1;
    }

    public void setPersonId1(int personId1) {
        this.personId1 = personId1;
    }

    public int getPersonId2() {
        return personId2;
    }

    public void setPersonId2(int personId2) {
        this.personId2 = personId2;
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

        PersonRelationship that = (PersonRelationship) o;

        if (personId1 != that.personId1) return false;
        if (personId2 != that.personId2) return false;
        if (relationshipType != null ? !relationshipType.equals(that.relationshipType) : that.relationshipType != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId1;
        result = 31 * result + personId2;
        result = 31 * result + (relationshipType != null ? relationshipType.hashCode() : 0);
        return result;
    }
}

package ca.calgary.vcpdr.data.personrelationship;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class PersonRelationshipPK implements Serializable {
    @Column(name = "personID1", nullable = false)
    @Id
    private int personId1;
    @Column(name = "personID2", nullable = false)
    @Id
    private int personId2;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        PersonRelationshipPK that = (PersonRelationshipPK) o;

        if (personId1 != that.personId1) return false;
        if (personId2 != that.personId2) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId1;
        result = 31 * result + personId2;
        return result;
    }
}

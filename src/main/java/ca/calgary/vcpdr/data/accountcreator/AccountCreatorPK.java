package ca.calgary.vcpdr.data.accountcreator;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class AccountCreatorPK implements Serializable {
    @Column(name = "userID", nullable = false)
    @Id
    private int userId;
    @Column(name = "personID", nullable = false)
    @Id
    private int personId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

        AccountCreatorPK that = (AccountCreatorPK) o;

        if (userId != that.userId) return false;
        if (personId != that.personId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + personId;
        return result;
    }
}

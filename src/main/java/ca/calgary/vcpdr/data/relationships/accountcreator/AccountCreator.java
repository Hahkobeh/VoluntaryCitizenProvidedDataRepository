package ca.calgary.vcpdr.data.relationships.accountcreator;

import javax.persistence.*;

@Entity
public class AccountCreator {
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Basic
    @Column(name = "personID", nullable = false)
    private int personId;

    public AccountCreator() {
    }

    public AccountCreator(int userId, int personId) {
        this.userId = userId;
        this.personId = personId;
    }

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

        AccountCreator that = (AccountCreator) o;

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

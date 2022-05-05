package ca.calgary.vcpdr.data.user;

import javax.persistence.*;
import java.sql.Date;


@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;
    private String email;
    private String password;
    @Column(name="persongivenname")
    private String personGivenName;
    @Column(name="personsurname")
    private String personSurName;
    @Column(name="lastupdated")
    private Date lastUpdated;

    public User(String email, String password, String personGivenName, String personSurName, Date lastUpdated) {
        this.email = email;
        this.password = password;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
        this.lastUpdated = lastUpdated;
    }

    public User() {

    }

    public Integer getUserID() {
        return userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPersonGivenName() {
        return personGivenName;
    }

    public void setPersonGivenName(String personGivenName) {
        this.personGivenName = personGivenName;
    }

    public String getPersonSurName() {
        return personSurName;
    }

    public void setPersonSurName(String personSurName) {
        this.personSurName = personSurName;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

}

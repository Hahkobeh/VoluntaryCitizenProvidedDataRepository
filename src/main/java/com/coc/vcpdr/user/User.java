package com.coc.vcpdr.user;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userID;
    private String email;
    private String password;
    @Column(name="telephonenumber")
    private String telephoneNumber;
    @Column(name="persongivenname")
    private String personGivenName;
    @Column(name="personsurname")
    private String personSurName;
    @Column(name="lastupdated")
    private Date lastUpdated;

    public User(String email, String password, String telephoneNumber, String personGivenName, String personSurName, Date lastUpdated) {
        this.email = email;
        this.password = password;
        this.telephoneNumber = telephoneNumber;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
        this.lastUpdated = lastUpdated;
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

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
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

    public User(){}
}

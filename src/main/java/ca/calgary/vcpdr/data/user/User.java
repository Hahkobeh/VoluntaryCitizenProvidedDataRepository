package ca.calgary.vcpdr.data.user;

import ca.calgary.vcpdr.data.personal.telephone.Telephone;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;


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
    @Column(name="lastlogin")
    private Date lastLogin;

    @OneToMany(mappedBy = "userID")
    private List<Telephone> telephoneList;

    public User(String email, String password, String personGivenName, String personSurName) {
        this.email = email;
        this.password = password;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
        this.lastLogin = new Date(new java.util.Date().getTime());
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

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastUpdated) {
        this.lastLogin = lastUpdated;
    }

    public List<Telephone> getTelephoneList() {
        return telephoneList;
    }

    public void setTelephoneList(List<Telephone> telephoneList) {
        this.telephoneList = telephoneList;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", personGivenName='" + personGivenName + '\'' +
                ", personSurName='" + personSurName + '\'' +
                ", lastLogin=" + lastLogin +
                ", telephoneList=" + telephoneList +
                '}' + '\n';
    }
}

package ca.calgary.vcpdr.data.user;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="users")
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @Basic
    @Column(name = "email", nullable = false, length = 255)
    private String email;
    @Basic
    @Column(name = "password", nullable = false, length = 255)
    private String password;
    @Basic
    @Column(name = "personGivenName", nullable = false, length = 255)
    private String personGivenName;
    @Basic
    @Column(name = "personSurName", nullable = false, length = 255)
    private String personSurName;
    @Basic
    @Column(name = "lastLogin", nullable = false)
    private Date lastLogin;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        User user = (User) o;

        if (userId != user.userId) return false;
        if (email != null ? !email.equals(user.email) : user.email != null) return false;
        if (password != null ? !password.equals(user.password) : user.password != null) return false;
        if (personGivenName != null ? !personGivenName.equals(user.personGivenName) : user.personGivenName != null)
            return false;
        if (personSurName != null ? !personSurName.equals(user.personSurName) : user.personSurName != null)
            return false;
        if (lastLogin != null ? !lastLogin.equals(user.lastLogin) : user.lastLogin != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (personGivenName != null ? personGivenName.hashCode() : 0);
        result = 31 * result + (personSurName != null ? personSurName.hashCode() : 0);
        result = 31 * result + (lastLogin != null ? lastLogin.hashCode() : 0);
        return result;
    }

    public User(String email, String password, String personGivenName, String personSurName) {
        this.email = email;
        this.password = password;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
        this.lastLogin = new Date(new java.util.Date().getTime());
    }

    public User() {
    }
}

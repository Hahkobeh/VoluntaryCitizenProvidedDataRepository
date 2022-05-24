package ca.calgary.vcpdr.data.personnal.person;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
@Data
public class Person {
    @Basic
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Basic
    @Column(name = "personRelationship", nullable = false)
    private String personRelationship;
    @Basic
    @Column(name = "personGivenName", nullable = false, length = 255)
    private String personGivenName;
    @Basic
    @Column(name = "personSurName", nullable = false, length = 255)
    private String personSurName;
    @Basic
    @Column(name = "personMaidenName", nullable = true, length = 255)
    private String personMaidenName;
    @Basic
    @Column(name = "personMiddleName", nullable = true, length = 255)
    private String personMiddleName;
    @Basic
    @Column(name = "personBirthDate", nullable = true)
    private Date personBirthDate;
    @Basic
    @Column(name = "personSexCode", nullable = true, length = 1)
    private String personSexCode;
    @Basic
    @Column(name = "personPrimaryLanguage", nullable = true, length = 255)
    private String personPrimaryLanguage;
    @Basic
    @Column(name = "personSecondaryLanguage", nullable = true, length = 255)
    private String personSecondaryLanguage;
    @Basic
    @Column(name = "wheelchair", nullable = true)
    private Byte wheelchair;
    @Basic
    @Column(name = "licenseNumber", nullable = true, length = 255)
    private String licenseNumber;
    @Basic
    @Column(name = "licenseProvince", nullable = true, length = 2)
    private String licenseProvince;

    public Person (){}

    public Person(int userId, String personGivenName, String personSurName, String personRelationship) {
        this.userId = userId;
        this.personGivenName = personGivenName;
        this.personSurName = personSurName;
        this.personRelationship = personRelationship;
    }


}

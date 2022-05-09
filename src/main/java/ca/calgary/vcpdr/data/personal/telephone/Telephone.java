package ca.calgary.vcpdr.data.personal.telephone;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "telephones")
@IdClass(CompKey.class)
public class Telephone{
    @Id
    private Integer userID;
    @Id
    @Column(name = "telephonenumber")
    private String telephoneNumber;
    @Column(name = "telephonetype")
    private String telephoneType;

    public Telephone(Integer userID, String telephoneNumber, String telephoneType) {
        this.userID = userID;
        this.telephoneNumber = telephoneNumber;
        this.telephoneType = telephoneType;
    }

    @Override
    public String toString() {
        return "Telephone{" +
                "userID=" + userID +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", telephoneType='" + telephoneType + '\'' +
                '}';
    }

    public Telephone() {
    }
}

package ca.calgary.vcpdr.data.personal.telephone;

import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "telephones")
@IdClass(CompKey.class)
public class Telephone {
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

    public Telephone() {
    }
}

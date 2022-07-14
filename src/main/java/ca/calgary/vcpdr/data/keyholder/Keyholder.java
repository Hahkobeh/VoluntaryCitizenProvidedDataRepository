package ca.calgary.vcpdr.data.keyholder;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@IdClass(KeyholderPK.class)
public class Keyholder {
    @Id
    @Column(name = "propertyId", nullable = false)
    private int propertyId;
    @Id
    @Column(name = "telephoneNumber", nullable = false)
    private String telephoneNumber;
    @Basic
    @Column(name = "personFullName", nullable = false)
    private String personFullName;


    public Keyholder(){}

}

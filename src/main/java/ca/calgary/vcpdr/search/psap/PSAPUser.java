package ca.calgary.vcpdr.search.psap;

import lombok.*;
import org.hibernate.Hibernate;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
@Getter
@Setter
@ToString
public class PSAPUser {
    @Id
    @Column(name = "username", nullable = false, length = 255)
    private String username;

    @Basic
    @Column(name = "password", nullable = false, length = 255)
    private String password;
    @Basic
    @Column(name = "fire", nullable = false)
    private boolean fire;
    @Basic
    @Column(name = "police", nullable = false)
    private boolean police;
    @Basic
    @Column(name = "medical", nullable = false)
    private boolean medical;


}

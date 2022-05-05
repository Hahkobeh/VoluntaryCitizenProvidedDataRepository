package ca.calgary.vcpdr.data.location.hazardousmaterial;

import javax.persistence.*;


@Entity
@Table(name = "hazardousmaterials")
@IdClass(CompKey.class)
public class HazardousMaterial {
    @Id
    private int userID;
    @Id
    private String address;



}

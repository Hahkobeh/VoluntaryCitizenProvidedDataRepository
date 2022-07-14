package ca.calgary.vcpdr.data.keyholder;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;
import java.io.Serializable;
@Data
public class KeyholderPK implements Serializable {
    @Column(name = "propertyID", nullable = false)
    @Id
    private int propertyId;
    @Column(name = "telephoneNumber", nullable = false)
    @Id
    private String telephoneNumber;


    public KeyholderPK(int propertyId, String telephoneNumber) {
        this.propertyId = propertyId;
        this.telephoneNumber = telephoneNumber;
    }

    public KeyholderPK() {
    }


}

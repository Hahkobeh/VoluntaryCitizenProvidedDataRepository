package ca.calgary.vcpdr.forms;

import lombok.Data;

@Data
public class TelephoneForm {
    private int userID;
    private String telephoneNumber;
    private String telephoneType;

    public TelephoneForm(int userID, String telephoneNumber, String telephoneType) {
        this.userID = userID;
        this.telephoneNumber = telephoneNumber;
        this.telephoneType = telephoneType;
    }
}

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

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

    public String getTelephoneType() {
        return telephoneType;
    }

    public void setTelephoneType(String telephoneType) {
        this.telephoneType = telephoneType;
    }
}

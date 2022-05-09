package ca.calgary.vcpdr.forms;


import lombok.Data;

@Data
public class RegistrationForm {
    private String email;
    private String password;
    private String personGivenName;
    private String personSurName;
    private String telephoneNumber;
    private String telephoneType;
}

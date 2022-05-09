package ca.calgary.vcpdr.forms;

import lombok.Data;

@Data
public class LoginForm {
    private String email;
    private String password;
}
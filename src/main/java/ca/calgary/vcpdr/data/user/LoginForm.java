package ca.calgary.vcpdr.data.user;

import lombok.Data;

@Data
public class LoginForm {
    private String email;
    private String password;
}
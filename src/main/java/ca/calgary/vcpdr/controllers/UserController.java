package ca.calgary.vcpdr.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ca.calgary.vcpdr.data.user.UserService;

@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController{


    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }






}

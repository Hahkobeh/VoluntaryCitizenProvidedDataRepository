package com.coc.vcpdr.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.coc.vcpdr.user.User;
import com.coc.vcpdr.user.UserService;

import java.sql.Date;

@Controller
@RequestMapping(path = "api/user/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class UserController{


    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/test")
    @ResponseBody
    public boolean addUser(){
        User user = new User("jacob@gmail.com", "password12", "5551115555", "Jacob", "Artuso", new Date(System.currentTimeMillis()));
        userService.saveUser(user);
        System.out.println("Added user");
        return true;
    }

    @GetMapping("/get")
    @ResponseBody
    public boolean get(){
        System.out.println("gotten");
        return true;
    }



}

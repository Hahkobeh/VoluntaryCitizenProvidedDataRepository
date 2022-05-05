package ca.calgary.vcpdr.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import ca.calgary.vcpdr.data.user.UserService;

@Controller
@RequestMapping(path = "api/psap/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class PSAPController {
    private final UserService userService;

    @Autowired
    public PSAPController(UserService userService) {
        this.userService = userService;
    }
}

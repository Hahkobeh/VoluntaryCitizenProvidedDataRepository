package ca.calgary.vcpdr.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping(path = "api/psap/v1")
@CrossOrigin(origins = {"http://localhost:3001"})
public class PSAPController {

}

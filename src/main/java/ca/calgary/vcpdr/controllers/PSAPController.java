package ca.calgary.vcpdr.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RequestMapping(path = "api/psap/v1")
@CrossOrigin(origins = {"http://localhost:3001"})
public class PSAPController {



    @GetMapping("/{type}")
    @ResponseBody
    public <T> List<T> getThing(@PathVariable String type){
        return (List<T>) null;
    }

}

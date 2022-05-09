package ca.calgary.vcpdr;


import ca.calgary.vcpdr.data.personal.telephone.Telephone;
import ca.calgary.vcpdr.data.personal.telephone.TelephoneRepository;
import ca.calgary.vcpdr.data.user.User;
import ca.calgary.vcpdr.data.user.UserRepository;
import ca.calgary.vcpdr.enums.Province;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;

@SpringBootApplication
public class VCPDR{


    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }


}

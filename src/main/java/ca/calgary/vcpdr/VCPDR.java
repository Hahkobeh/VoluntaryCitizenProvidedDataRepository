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

import java.sql.Date;

@SpringBootApplication
public class VCPDR implements CommandLineRunner {
    private final UserRepository userRepository;
    private final TelephoneRepository telephoneRepository;

    @Autowired
    public VCPDR(UserRepository userRepository, TelephoneRepository telephoneRepository) {
        this.userRepository = userRepository;
        this.telephoneRepository = telephoneRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("running");
        System.out.println(Province.AB.getFullName());
        Telephone telephone = new Telephone(2, "9995555555", "Home");
        Telephone telephone2 = new Telephone(1, "9995555555", "Home");


        /*telephoneRepository.save(telephone);
        telephoneRepository.save(telephone2);*/
        User user = new User("jacobsas@gmail.com", "password12", "Jacadwob", "Artuso", new Date(System.currentTimeMillis()));
        User user2 = new User("jacobosasa@gmail.com", "password12", "Jacodddb", "Artuso", new Date(System.currentTimeMillis()));


        userRepository.save(user);
        userRepository.save(user2);
    }


}

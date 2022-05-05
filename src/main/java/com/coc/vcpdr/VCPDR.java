package com.coc.vcpdr;


import com.coc.vcpdr.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.coc.vcpdr.user.UserRepository;

import java.sql.Date;

@SpringBootApplication
public class VCPDR implements CommandLineRunner {
    private final UserRepository userRepository;

    @Autowired
    public VCPDR(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("running");
        User user = new User("jacob@gmail.com", "password12", "Jacob", "Artuso", new Date(System.currentTimeMillis()));
        User user2 = new User("jacobo@gmail.com", "password12", "Jacob", "Artuso", new Date(System.currentTimeMillis()));


        userRepository.save(user);
        userRepository.save(user2);
    }
}

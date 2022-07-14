package ca.calgary.vcpdr;



import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Date;

@SpringBootApplication
@EnableTransactionManagement
public class VCPDR implements CommandLineRunner {

    //boom

    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }



    public void run(String... args) throws Exception {
        System.out.println("System started at: " + new Date().toString() + ". You're great!");
    }
}

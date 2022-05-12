package ca.calgary.vcpdr;



import ca.calgary.vcpdr.data.vulnerablepersoninformation.VulnerablePersonInformationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Date;

@SpringBootApplication
@EnableTransactionManagement
public class VCPDR implements CommandLineRunner {


    /*@Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonRepository personRepository;*/

    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }



    public void run(String... args) throws Exception {
        System.out.println("System started at: " + new Date().toString() + ". You're great!");
    }
}

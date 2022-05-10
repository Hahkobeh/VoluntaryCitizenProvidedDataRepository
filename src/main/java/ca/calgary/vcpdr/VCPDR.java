package ca.calgary.vcpdr;



import ca.calgary.vcpdr.controllers.UserController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class VCPDR implements CommandLineRunner {


    @Autowired
    private UserController userController;

    public static void main(String[] args) {
        SpringApplication.run(VCPDR.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        //userController.test();
        System.out.println("You're Great!");
    }
}

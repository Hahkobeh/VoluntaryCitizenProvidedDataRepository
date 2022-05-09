package ca.calgary.vcpdr.data.user;

import ca.calgary.vcpdr.forms.LoginForm;
import ca.calgary.vcpdr.forms.RegistrationForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public User login(LoginForm loginForm){
        return userRepository.findByEmailAndPassword(loginForm.getEmail(), loginForm.getPassword());

    }

    public User register(RegistrationForm registrationForm){
        User user = new User(registrationForm.getEmail(), registrationForm.getPassword(), registrationForm.getPersonGivenName(), registrationForm.getPersonSurName());
        userRepository.save(user);
        return user;
    }


    void deleteUser(int id){
        userRepository.deleteById(id);
    }

    public void test(){
        System.out.println(userRepository.blah());
        System.out.println(userRepository.findAllByUserID(1));
    }
}

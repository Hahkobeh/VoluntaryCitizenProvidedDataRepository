package ca.calgary.vcpdr.data.user;

import ca.calgary.vcpdr.forms.LoginForm;
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




    void deleteUser(int id){
        userRepository.deleteById(id);
    }

    public void test(){
        User user = new User("ja@gmail.com","pass","jacob","artuso");
        userRepository.save(user);
        System.out.println(userRepository.blah());
    }
}

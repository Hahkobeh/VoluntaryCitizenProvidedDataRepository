package ca.calgary.vcpdr.data.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String email, String password) {
        return userRepository.save(new User(email, password));
    }

    public User login(String email, String password) {
        return null;
    }
}

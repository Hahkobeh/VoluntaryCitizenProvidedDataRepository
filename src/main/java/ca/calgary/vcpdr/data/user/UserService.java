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
        return userRepository.findByEmailAndPassword(email, password);
    }

    public boolean emailExists(String email) {
        return userRepository.findByEmail(email).isPresent();
    }

    public boolean userIdExists(int userId) {
        return userRepository.findById(userId).isPresent();
    }

    public boolean changePassword(int userId, String newPassword) {
        User user = userRepository.findById(userId).orElse(null);
        if(user == null) return false;
        user.setPassword(newPassword);
        userRepository.save(user);
        return true;

    }
}

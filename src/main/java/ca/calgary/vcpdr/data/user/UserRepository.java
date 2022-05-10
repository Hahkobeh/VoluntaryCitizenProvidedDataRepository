package ca.calgary.vcpdr.data.user;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {



    @Query(value = "SELECT * FROM users;", nativeQuery = true)
    List<User> blah();


    User findByEmailAndPassword(String email, String password);
}

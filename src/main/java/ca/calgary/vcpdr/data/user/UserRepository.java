package ca.calgary.vcpdr.data.user;


import ca.calgary.vcpdr.data.personal.telephone.Telephone;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    User findByEmailAndPassword(String email, String password);
    List<User> findAllByPersonSurName(String personSurName);

    @Query(value = "SELECT * FROM users;", nativeQuery = true)
    List<User> blah();

    List<User> findAllByUserID(int userID);



}

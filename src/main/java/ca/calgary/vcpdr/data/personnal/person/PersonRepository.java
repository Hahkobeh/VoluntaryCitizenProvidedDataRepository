package ca.calgary.vcpdr.data.personnal.person;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonRepository extends CrudRepository<Person, Integer> {
    List<Person> findAllByUserId(int userId);

    List<Person> findAllByPersonGivenNameOrPersonSurName(String personGivenName, String personSurName);

    List<Person> findAllByPersonGivenNameAndPersonSurName(String personGivenName, String personSurName);

    List<Person> findAllByPersonGivenNameAndPersonMiddleNameAndPersonSurName(String personGivenName, String personMiddleName, String personSurName);
}

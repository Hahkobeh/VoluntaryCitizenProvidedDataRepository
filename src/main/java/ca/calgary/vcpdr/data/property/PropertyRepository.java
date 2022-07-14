package ca.calgary.vcpdr.data.property;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends CrudRepository<Property, Integer> {
    List<Property> findAllByUserId(int userId);

    List<Property> findAllByA1(String a1);

    List<Property> findAllByA1AndA3(String a1, String a3);

    List<Property> findAllByHnoAndStsAndRd(String hno, String sts, String rd);

    List<Property> findAllByHnoAndStsAndRdAndA1AndA3(String hno, String sts, String rd, String a1, String a3);

    List<Property> findAllByPc(String pc);

    List<Property> findAllByA3(String a3);
}

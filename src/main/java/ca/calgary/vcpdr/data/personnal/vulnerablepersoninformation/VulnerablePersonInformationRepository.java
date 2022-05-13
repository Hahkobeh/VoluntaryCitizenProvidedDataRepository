package ca.calgary.vcpdr.data.personnal.vulnerablepersoninformation;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VulnerablePersonInformationRepository extends CrudRepository<VulnerablePersonInformation, Integer> {
}

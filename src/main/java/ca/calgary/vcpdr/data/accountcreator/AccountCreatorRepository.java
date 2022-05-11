package ca.calgary.vcpdr.data.accountcreator;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountCreatorRepository extends CrudRepository<AccountCreator, AccountCreatorPK> {
}

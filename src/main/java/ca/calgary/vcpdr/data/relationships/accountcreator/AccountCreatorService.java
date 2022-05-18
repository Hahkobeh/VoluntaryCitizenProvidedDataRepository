package ca.calgary.vcpdr.data.relationships.accountcreator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountCreatorService {
    private final AccountCreatorRepository accountCreatorRepository;

    @Autowired
    public AccountCreatorService(AccountCreatorRepository accountCreatorRepository) {
        this.accountCreatorRepository = accountCreatorRepository;
    }

    public void createLink(int userId, int personId) {
        accountCreatorRepository.save(new AccountCreator(userId, personId));
    }

    public int getLink(int userId) {
        return accountCreatorRepository.findById(userId).get().getPersonId();
    }

    public int getUserPerson(int userId){
        return accountCreatorRepository.findById(userId).get().getPersonId();
    }
}

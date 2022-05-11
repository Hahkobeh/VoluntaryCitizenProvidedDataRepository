package ca.calgary.vcpdr.data.accountcreator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountCreatorService {
    @Autowired
    private AccountCreatorRepository accountCreatorRepository;

    public void createLink(int userId, int personId) {
        accountCreatorRepository.save(new AccountCreator(userId, personId));
    }
}

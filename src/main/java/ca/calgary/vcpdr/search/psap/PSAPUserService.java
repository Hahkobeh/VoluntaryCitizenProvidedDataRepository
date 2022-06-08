package ca.calgary.vcpdr.search.psap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PSAPUserService {

    private final PSAPUserRepository psapUserRepository;

    @Autowired
    public PSAPUserService(PSAPUserRepository psapUserRepository) {
        this.psapUserRepository = psapUserRepository;
    }


    public PSAPUser login(PSAPUser loginInfo){
        PSAPUser user = psapUserRepository.findById(loginInfo.getUsername()).orElse(null);
        if(user == null) return null;
        if(!user.getPassword().equals(loginInfo.getPassword())) return null;
        return user;
    }

    public PSAPUser register(PSAPUser registrationInfo){
        PSAPUser user = psapUserRepository.findById(registrationInfo.getUsername()).orElse(null);
        if(user != null) return null;
        return psapUserRepository.save(registrationInfo);
    }
}

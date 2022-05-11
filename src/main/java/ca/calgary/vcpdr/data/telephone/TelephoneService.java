package ca.calgary.vcpdr.data.telephone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelephoneService {
    @Autowired
    private TelephoneRepository telephoneRepository;

    public Telephone createTelephone(int personId, String telephoneNumber, String telephoneType) {
        return telephoneRepository.save(new Telephone(personId, telephoneNumber, telephoneType));
    }
}

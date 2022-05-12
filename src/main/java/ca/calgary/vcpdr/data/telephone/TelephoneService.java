package ca.calgary.vcpdr.data.telephone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelephoneService {
    private final TelephoneRepository telephoneRepository;

    @Autowired
    public TelephoneService(TelephoneRepository telephoneRepository) {
        this.telephoneRepository = telephoneRepository;
    }

    public Telephone createTelephone(int personId, String telephoneNumber, String telephoneType) {
        return telephoneRepository.save(new Telephone(personId, telephoneNumber, telephoneType));
    }
}

package ca.calgary.vcpdr.data.personnal.telephone;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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

    public Telephone createTelephone(Telephone telephone) {
        return telephoneRepository.save(telephone);
    }

    public boolean deleteTelephone(Telephone telephone) {
        TelephonePK telephonePK = new TelephonePK(telephone.getPersonId(), telephone.getTelephoneNumber());
        if(telephoneRepository.existsById(telephonePK)){
            telephoneRepository.deleteById(telephonePK);
            return true;
        }
        return false;
    }

    public List<Telephone> getTelephones(int personId) {
        return telephoneRepository.findAllByPersonId(personId);
    }

    public List<Telephone> getTelephones(String telephoneNumber) {
        return telephoneRepository.findAllByTelephoneNumber(telephoneNumber);
    }
}

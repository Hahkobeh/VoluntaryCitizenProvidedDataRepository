package ca.calgary.vcpdr.data.keyholder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KeyholderService {
    private final KeyholderRepository keyholderRepository;

    @Autowired
    public KeyholderService(KeyholderRepository keyholderRepository) {
        this.keyholderRepository = keyholderRepository;
    }

    public List<Keyholder> getKeyholders(int propertyId) {
        return keyholderRepository.findAllByPropertyId(propertyId);
    }

    public boolean deleteKeyholder(Keyholder keyholder) {
        keyholderRepository.deleteById(new KeyholderPK(keyholder.getPropertyId(), keyholder.getPersonFullName()));
        return true;
    }

    public Keyholder createKeyholder(Keyholder keyholder) {
        return keyholderRepository.save(keyholder);
    }
}

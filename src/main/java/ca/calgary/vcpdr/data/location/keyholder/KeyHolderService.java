package ca.calgary.vcpdr.data.location.keyholder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KeyHolderService {

    private final KeyHolderRepository keyHolderRepository;

    @Autowired
    public KeyHolderService(KeyHolderRepository keyHolderRepository) {
        this.keyHolderRepository = keyHolderRepository;
    }
}

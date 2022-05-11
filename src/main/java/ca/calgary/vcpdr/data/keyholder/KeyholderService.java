package ca.calgary.vcpdr.data.keyholder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KeyholderService {
    @Autowired
    private KeyholderRepository keyholderRepository;
}

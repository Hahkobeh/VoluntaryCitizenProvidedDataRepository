package ca.calgary.vcpdr.data.personnal.emergencycontact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmergencyContactService {
    @Autowired
    private EmergencyContactRepository emergencyContactRepository;
}

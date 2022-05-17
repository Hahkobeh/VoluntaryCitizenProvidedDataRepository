package ca.calgary.vcpdr.data.personnal.emergencycontact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmergencyContactService {
    @Autowired
    private EmergencyContactRepository emergencyContactRepository;

    public EmergencyContact createEmergencyContact(EmergencyContact emergencyContact) {
        return emergencyContactRepository.save(emergencyContact);
    }

    public boolean deleteEmergencyContact(EmergencyContact emergencyContact) {
        EmergencyContactPK emergencyContactPK = new EmergencyContactPK(emergencyContact.getPersonId(), emergencyContact.getTelephoneNumber());
        if (emergencyContactRepository.existsById(emergencyContactPK)){
            emergencyContactRepository.deleteById(emergencyContactPK);
            return true;
        }
        return false;
    }

    public List<EmergencyContact> getEmergencyContacts(int personId) {
        return emergencyContactRepository.findAllByPersonId(personId);
    }
}

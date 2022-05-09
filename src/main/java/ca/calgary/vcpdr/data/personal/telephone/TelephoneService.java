package ca.calgary.vcpdr.data.personal.telephone;

import ca.calgary.vcpdr.forms.TelephoneForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TelephoneService {
    private final TelephoneRepository telephoneRepository;

    @Autowired
    public TelephoneService(TelephoneRepository telephoneRepository) {
        this.telephoneRepository = telephoneRepository;
    }

    public Telephone addTelephone(TelephoneForm telephoneForm){
        Telephone telephone = new Telephone(telephoneForm.getUserID(), telephoneForm.getTelephoneNumber(), telephoneForm.getTelephoneType());
        System.out.println(telephone);
        return telephoneRepository.save(telephone);
    }


}

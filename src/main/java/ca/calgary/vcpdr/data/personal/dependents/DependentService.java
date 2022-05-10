package ca.calgary.vcpdr.data.personal.dependents;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DependentService {

    private final DependentRepository dependentRepository;

    @Autowired
    public DependentService(DependentRepository dependentRepository) {
        this.dependentRepository = dependentRepository;
    }
}

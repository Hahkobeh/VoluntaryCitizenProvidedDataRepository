package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.search.psap.PSAPUser;
import lombok.Data;

@Data
public class VehicleSearchForm {
    private PSAPUser psapUser;
    private String registrationPlateIdentification;
    private String vehicleMake;
    private String vehicleModel;
    private String year;
    private RequestedDataObjects requestedDataObjects;
    public VehicleSearchForm(){}

}

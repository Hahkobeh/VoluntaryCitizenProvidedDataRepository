package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.search.psap.PSAPUser;
import lombok.Data;

@Data
public class TelephoneSearchForm {
    private PSAPUser psapUser;
    private String telephoneNumber;
    private RequestedDataObjects requestedDataObjects;

    public TelephoneSearchForm(){}
}

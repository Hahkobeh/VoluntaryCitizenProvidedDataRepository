package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.search.psap.PSAPUser;
import lombok.Data;

@Data
public class PropertySearchForm {
    private PSAPUser psapUser;
    private String rd;
    private String sts;
    private String hno;
    private String hns;
    private String a1;
    private String a3;
    private String pod;
    private String pc;
    private RequestedDataObjects requestedDataObjects;
    public PropertySearchForm(){}

}

package ca.calgary.vcpdr.search;

import lombok.Data;

@Data
public class RequestedDataObjects {
    private boolean fire;
    private boolean police;
    private boolean medical;
    public RequestedDataObjects(){}
}

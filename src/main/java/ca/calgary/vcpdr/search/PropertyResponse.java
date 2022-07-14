package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.data.hazardousmaterial.HazardousMaterial;
import ca.calgary.vcpdr.data.property.Property;
import ca.calgary.vcpdr.data.keyholder.Keyholder;
import lombok.Data;

import java.util.List;

@Data
public class PropertyResponse {
    private Property property;
    private List<HazardousMaterial> hazardousMaterials;
    private List<Keyholder> keyholders;

    public PropertyResponse(){}
}

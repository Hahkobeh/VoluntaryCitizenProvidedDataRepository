package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.search.psap.PSAPUser;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Date;


@Getter
@Setter
@ToString
public class PersonSearchForm {
    private String personName;
    private LocalDate personBirthDate;
    private String personSexCode;
    private PSAPUser psapUser;


    public PersonSearchForm() {
    }
}

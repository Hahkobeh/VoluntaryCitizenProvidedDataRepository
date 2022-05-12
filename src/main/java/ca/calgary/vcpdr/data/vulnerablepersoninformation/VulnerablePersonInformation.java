package ca.calgary.vcpdr.data.vulnerablepersoninformation;

import javax.persistence.*;

@Entity
public class VulnerablePersonInformation {
    @Id
    @Column(name = "personID", nullable = false)
    private int personId;
    @Basic
    @Column(name = "vulnerablePersonDescription", nullable = false, length = 500)
    private String vulnerablePersonDescription;
    @Basic
    @Column(name = "specialRequests", nullable = true, length = 500)
    private String specialRequests;

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getVulnerablePersonDescription() {
        return vulnerablePersonDescription;
    }

    public void setVulnerablePersonDescription(String vulnerablePersonDescription) {
        this.vulnerablePersonDescription = vulnerablePersonDescription;
    }

    public String getSpecialRequests() {
        return specialRequests;
    }

    public void setSpecialRequests(String specialRequests) {
        this.specialRequests = specialRequests;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        VulnerablePersonInformation that = (VulnerablePersonInformation) o;

        if (personId != that.personId) return false;
        if (vulnerablePersonDescription != null ? !vulnerablePersonDescription.equals(that.vulnerablePersonDescription) : that.vulnerablePersonDescription != null)
            return false;
        if (specialRequests != null ? !specialRequests.equals(that.specialRequests) : that.specialRequests != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = personId;
        result = 31 * result + (vulnerablePersonDescription != null ? vulnerablePersonDescription.hashCode() : 0);
        result = 31 * result + (specialRequests != null ? specialRequests.hashCode() : 0);
        return result;
    }
}

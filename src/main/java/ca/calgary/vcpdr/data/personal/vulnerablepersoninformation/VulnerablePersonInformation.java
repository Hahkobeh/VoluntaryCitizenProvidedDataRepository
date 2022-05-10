package ca.calgary.vcpdr.data.personal.vulnerablepersoninformation;

import javax.persistence.*;

@Entity
@IdClass(VulnerablePersonInformationPK.class)
public class VulnerablePersonInformation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userID", nullable = false)
    private int userId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "vulnerablePersonID", nullable = false)
    private int vulnerablePersonId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "dependentID", nullable = false)
    private int dependentId;
    @Basic
    @Column(name = "vulnerablePersonDescription", nullable = false, length = 500)
    private String vulnerablePersonDescription;
    @Basic
    @Column(name = "specialRequests", nullable = true, length = 500)
    private String specialRequests;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getVulnerablePersonId() {
        return vulnerablePersonId;
    }

    public void setVulnerablePersonId(int vulnerablePersonId) {
        this.vulnerablePersonId = vulnerablePersonId;
    }

    public int getDependentId() {
        return dependentId;
    }

    public void setDependentId(int dependentId) {
        this.dependentId = dependentId;
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

        if (userId != that.userId) return false;
        if (vulnerablePersonId != that.vulnerablePersonId) return false;
        if (dependentId != that.dependentId) return false;
        if (vulnerablePersonDescription != null ? !vulnerablePersonDescription.equals(that.vulnerablePersonDescription) : that.vulnerablePersonDescription != null)
            return false;
        if (specialRequests != null ? !specialRequests.equals(that.specialRequests) : that.specialRequests != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + vulnerablePersonId;
        result = 31 * result + dependentId;
        result = 31 * result + (vulnerablePersonDescription != null ? vulnerablePersonDescription.hashCode() : 0);
        result = 31 * result + (specialRequests != null ? specialRequests.hashCode() : 0);
        return result;
    }
}

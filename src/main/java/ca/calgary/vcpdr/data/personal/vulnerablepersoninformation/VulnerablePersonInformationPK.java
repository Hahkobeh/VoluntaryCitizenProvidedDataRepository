package ca.calgary.vcpdr.data.personal.vulnerablepersoninformation;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

public class VulnerablePersonInformationPK implements Serializable {
    @Column(name = "userID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @Column(name = "vulnerablePersonID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int vulnerablePersonId;
    @Column(name = "dependentID", nullable = false)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int dependentId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        VulnerablePersonInformationPK that = (VulnerablePersonInformationPK) o;

        if (userId != that.userId) return false;
        if (vulnerablePersonId != that.vulnerablePersonId) return false;
        if (dependentId != that.dependentId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = userId;
        result = 31 * result + vulnerablePersonId;
        result = 31 * result + dependentId;
        return result;
    }
}

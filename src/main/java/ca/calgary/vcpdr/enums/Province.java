package ca.calgary.vcpdr.enums;

public enum Province {
    AB("Alberta"),
    BC("British Columbia"),
    ON("Ontario");

    private final String fullName;
    Province(String fullName) {
        this.fullName = fullName;
    }

    public String getFullName(){
        return fullName;
    }
}

package ca.calgary.vcpdr.search;

import ca.calgary.vcpdr.data.personnal.person.Person;
import ca.calgary.vcpdr.data.personnal.person.PersonService;
import ca.calgary.vcpdr.data.personnal.telephone.Telephone;
import ca.calgary.vcpdr.data.personnal.telephone.TelephoneService;
import ca.calgary.vcpdr.data.property.Property;
import ca.calgary.vcpdr.data.property.PropertyService;
import ca.calgary.vcpdr.data.vehicle.Vehicle;
import ca.calgary.vcpdr.data.vehicle.VehicleService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.util.Pair;


import java.util.*;
import java.util.stream.Collectors;

@Data
public class Search {
    private final PersonService personService;
    private final TelephoneService telephoneService;

    private final VehicleService vehicleService;
    private final PropertyService propertyService;

    public Search(PersonService personService, TelephoneService telephoneService, VehicleService vehicleService, PropertyService propertyService) {
        this.personService = personService;
        this.telephoneService = telephoneService;
        this.vehicleService = vehicleService;
        this.propertyService = propertyService;
    }

    public List<Pair<Telephone, Person>> search(TelephoneSearchForm telephoneSearchForm){
        List<Pair<Telephone, Person>> results = new ArrayList<>();
        List<Telephone> telephones = null;
        telephones = telephoneService.getTelephones(telephoneSearchForm.getTelephoneNumber());
        for (Telephone telephone: telephones) {
            Person person = personService.getPerson(telephone.getPersonId());
            results.add(Pair.of(telephone, person));

        }
        return results;
    }

    public List<Person> search(PersonSearchForm personSearchForm){
        List<Person> persons = null;
        System.out.println(personSearchForm);
        if(personSearchForm.getPersonName().equals("")) {
            persons = personService.getAll();
        }else{
            String [] names = personSearchForm.getPersonName().trim().split("\\s+");

            for (int i = 0; i < names.length; i++) {
                names[i] = capitalize(names[i]);
            }

            switch (names.length){
                case 1: {
                    persons = personService.findPerson(names[0]);
                    break;
                }
                case 2: {
                    persons = personService.findPerson(names[0], names[1]);
                    break;
                }
                case 3: {
                    persons = personService.findPerson(names[0], names[1], names[2]);
                    break;
                }
                default:
                    return null;
            }
        }




        if(personSearchForm.getPersonBirthDate() != null){
            persons = persons
                        .stream()
                        .filter(person -> (
                            person.getPersonBirthDate() == null ||
                            person.getPersonBirthDate().equals(personSearchForm.getPersonBirthDate())
                        ))
                        .collect(Collectors.toList());
        }

        if(!personSearchForm.getPersonSexCode().equals("")){
            persons = persons
                        .stream()
                        .filter(person -> (
                            person.getPersonSexCode() == null ||
                            Objects.equals(person.getPersonSexCode(), "") ||
                            person.getPersonSexCode().equals(personSearchForm.getPersonSexCode())
                        ))
                        .collect(Collectors.toList());
        }

        return persons;

    }

    private String capitalize(String word){

        return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase(Locale.ROOT);
    }




    public List<Property> search(PropertySearchForm propertySearchForm) {
        List<Property> properties = null;
        if(propertySearchForm.getA1().equals("") && propertySearchForm.getA3().equals("")){
            properties = propertyService.getAllProperties();
        }else if(propertySearchForm.getA1().equals("")){
            properties = propertyService.getPropertiesByA3(propertySearchForm.getA3());
        }else if(propertySearchForm.getA3().equals("")){
            properties = propertyService.getPropertiesByA1(propertySearchForm.getA1());
        }else {
            properties = propertyService.getPropertiesByA1AndA3(propertySearchForm.getA1(), propertySearchForm.getA3());
        }

        if (!propertySearchForm.getHnos().equals("")) {
            String [] addressInfo = propertySearchForm.getHnos().trim().split("\\s+");
            switch (addressInfo.length){
                case 2:
                    properties = properties.stream().filter(property -> (Objects.equals(property.getHno(), addressInfo[0]) && Objects.equals(property.getHns(), addressInfo[1]))).collect(Collectors.toList());
                    break;
                case 1:
                    properties = properties.stream().filter(property -> (Objects.equals(property.getHno(), addressInfo[0]))).collect(Collectors.toList());
                    break;
                default:
                    break;
            }
        }

        if(!propertySearchForm.getRd().equals("")){
            properties = properties.stream().filter(property -> Objects.equals(property.getRd(), propertySearchForm.getRd())).collect(Collectors.toList());
        }

        if(!propertySearchForm.getSts().equals("")){
            properties = properties.stream().filter(property -> Objects.equals(property.getSts(), propertySearchForm.getSts())).collect(Collectors.toList());
        }


        if(!propertySearchForm.getPod().equals("")){
            properties = properties.stream().filter(property -> (
                    property.getPod() != null &&
                            Objects.equals(property.getPod(),propertySearchForm.getPod())
                    )).collect(Collectors.toList());
        }



        return properties;
    }

    public List<Vehicle> search(VehicleSearchForm vehicleSearchForm){
        List<Vehicle> vehicles = null;
        if(!vehicleSearchForm.getRegistrationPlateIdentification().equals("")){
            return vehicleService.getVehicleByLicensePlate(vehicleSearchForm.getRegistrationPlateIdentification());
        }else{
            vehicles = vehicleService.getAllVehicles();

            if(!vehicleSearchForm.getVehicleMake().equals("")){
                vehicles = vehicles.stream().filter(vehicle -> (
                        Objects.equals(vehicle.getVehicleMake(), vehicleSearchForm.getVehicleMake())
                        )).collect(Collectors.toList());
            }

            if(!vehicleSearchForm.getVehicleModel().equals("")){
                vehicles = vehicles.stream().filter(vehicle -> (
                        Objects.equals(vehicle.getVehicleModel(), vehicleSearchForm.getVehicleModel())
                )).collect(Collectors.toList());
            }

            if(!vehicleSearchForm.getYear().equals("")){
                vehicles = vehicles.stream().filter(vehicle -> (
                        vehicle.getYear() == Integer.parseInt(vehicleSearchForm.getYear())
                )).collect(Collectors.toList());
            }

        }


        return vehicles;
    }


}


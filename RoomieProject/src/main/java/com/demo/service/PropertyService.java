package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.Property;

public interface PropertyService {

	Property addProperty(Property property);

	List<Property> getAll();

	Optional<Property> getById(int id);

	Property update(Property property);

	void deleteProperty(int id);

	Property searchByCity(String city);

	List<String> searchCity();

	Property getId(int flat_no, String society_name);

}

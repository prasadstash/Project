package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.demo.beans.Property;
import com.demo.dao.PropertyDao;

@Service
public class PropertyServiceImpl implements PropertyService{
	
	@Autowired
	private PropertyDao pdao;

	@Override
	public Property addProperty(Property property) {
		pdao.save(property);
		return property;
	}

	@Override
	public List<Property> getAll() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public Optional<Property> getById(int id) throws EmptyResultDataAccessException{
		Optional<Property> op=pdao.findById(id);
		//if(op.isPresent()) {
			System.out.println(op);
		return Optional.ofNullable(op.get());
			
		/*}else {
			return null;
			//throw new ResourceNotFoundException("product","pid",id)
		}*/
	}
	@Override
	public Property update(Property property) {
		// TODO Auto-generated method stub
		Property prop=pdao.save(property);
		return prop;
	}

	
	@Override
	public void deleteProperty(int id) {
		pdao.deleteById(id);
	}

	@Override
	public Property searchByCity(String city) {
		// TODO Auto-generated method stub
		return pdao.searchByCity(city);
	}

	@Override
	public List<String> searchCity() {
		return pdao.searchCity();
	}

	@Override
	public Property getId(int flat_no, String society_name) {
		// TODO Auto-generated method stub
		return null;
	}

	
}

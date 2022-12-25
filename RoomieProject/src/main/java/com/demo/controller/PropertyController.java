package com.demo.controller;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Property;
import com.demo.service.PropertyService;
//https://www.javatpoint.com/spring-boot-annotations
//@GetRequest is the annotation used for spring boot and is compatable with rest api
@RestController  //@RequestMapping is used in spring and not in springboot. 
@RequestMapping("/property")
@CrossOrigin(origins="http://localhost:3000" , allowedHeaders = "*" )

public class PropertyController {
	@Autowired
	private PropertyService propertyService;
	
	
	//-----------------adding property------------------ 
	@PostMapping
	public ResponseEntity<Property> add( @RequestBody Property p) {
		
		try{
			Property property = propertyService.addProperty(p);
			System.out.println(property.getPid());

			return ResponseEntity.ok(property);

		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	
	}
	//-------------fetching all properties---------
	@GetMapping
	public List<Property> getAllProperty(){
		return propertyService.getAll();
	}
	
	@GetMapping("/city/{city}")
	public ResponseEntity<Optional<Property>> save( @PathVariable String city) {
		
		try{
			Property p = propertyService.searchByCity(city);

			return new ResponseEntity<>(HttpStatus.OK);

		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	
	}
	
	
	@GetMapping("/city")
	public ResponseEntity<List<String>> getCity() {
		
		try{
			List<String> city = propertyService.searchCity();

			return ResponseEntity.ok(city);

		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	
	}
	//-----------fetching a particular property through id------
	@GetMapping("{pid}")
	public Optional<Property> getProductData(@PathVariable int pid){
		System.out.println("called get by id");
		Optional<Property> p= propertyService.getById(pid);
		return Optional.ofNullable(p.get());
		
		
	}
	
	
	//---------update property----------
	@PutMapping
	public ResponseEntity<HttpStatus> updateProp(@RequestBody Property property) {
		try {
			propertyService.update(property);
			return new ResponseEntity<>(HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
	
	//------------------delete property----------------
	@DeleteMapping
	public void deleteProduct(@PathVariable int pid){
		propertyService.deleteProperty(pid);
		
		
	} 
	
	
	@GetMapping("{flat_no}/{society_name}")
	public ResponseEntity<Property> getId(@PathVariable int flat_no,@PathVariable String society_name) {
		
		try{
			Property p = propertyService.getId(flat_no,society_name);
			return ResponseEntity.ok(p);
 
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
	
}

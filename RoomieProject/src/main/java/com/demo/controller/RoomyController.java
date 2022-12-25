package com.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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

import com.demo.beans.Login;
import com.demo.beans.Property;
import com.demo.beans.Roomy_info;
import com.demo.service.RoomyService;

@RestController
@RequestMapping("/roomy")
@CrossOrigin(origins="http://localhost:3000" , allowedHeaders = "*" )
public class RoomyController {
	@Autowired
	private RoomyService rservice;
	
	//............adding roomy...........
	@PostMapping
	public Roomy_info addRoomy(@RequestBody Roomy_info roomy_info )
	{
		return rservice.addroomy(roomy_info);
	}
	
	
//	@PostMapping(value="/login",consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE},        produces = {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
//	public Roomy_info validate(@RequestBody Login login) {
//		System.out.println(login);
//		Roomy_info roomy = rservice.findRoomy(login);
//		System.out.println(roomy);
//		if(roomy != null) {
//			return roomy;
//		}
//		else {
//			System.out.println("not found");
//			return null;
//		}
//	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Roomy_info> validate(@RequestBody Login login) {
		
		Roomy_info roomy = rservice.findRoomy(login);

		if(roomy!=null) {
			return ResponseEntity.ok(roomy);
		}else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
	//-------------fetch roomy---------
	
//	@GetMapping("/roomy/{roomyid}")
//	public Roomy_info getOne(@RequestParam int roomyid){
//		return rservice.getById(roomyid);
//	}
	
	//...............update roomy info............
	
	@GetMapping("{rid}")
	public Optional<Roomy_info> getRoomyData(@PathVariable int rid){
		System.out.println("called get by id");
		Optional<Roomy_info> p= rservice.getById(rid);
		return Optional.ofNullable(p.get());
		
		
	}
	
	@PutMapping
	public Roomy_info updateRoomyInfo(@RequestBody Roomy_info roomy_info)
	{
		return rservice.updateRoomyInfo(roomy_info);
	}
	
	
	//.............delete roomy info..............
   
	@DeleteMapping("{roomyid}")
	
    	public void deleteroomy(@PathVariable int roomyid)
    	{
    		rservice.deleteroomy(roomyid);
    	}
				
//	@GetMapping("/roomyinfo/{roomyid}")
//	
//	public void getByPid(@PathVariable int roomyid)
//	{
//		rservice.getProperty(roomyid);
//	}
	
//	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
//	public Roomy_info login(@RequestParam String username, @RequestParam String password) {
//		return rservice.findRoomy(username,password);
//	}
	
//	@PostMapping("/login")
//	public Optional<Roomy_info> getProductData(@RequestBody Login login){
//		System.out.println("called get by id");
//		System.out.println(login.getUsername()+" "+login.getPassword());
//		Optional<Roomy_info> p= rservice.getByName(login.getUsername(),login.getPassword());
//		return Optional.ofNullable(p.get());
//		
//		
//	}
	

}













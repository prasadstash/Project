package com.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Login;
import com.demo.beans.Property;
import com.demo.beans.Roomy_info;
import com.demo.dao.RoomieDao;

@Service
public class RoomyServiceImpl implements RoomyService{
	@Autowired
	private RoomieDao rdao;
    
	
	//..............adding roomy..........
	@Override
	public Roomy_info addroomy(Roomy_info roomy_info) {
		rdao.save(roomy_info);
		return roomy_info;
	}


	

	@Override
	public Roomy_info updateRoomyInfo(Roomy_info roomy_info) {
		
		rdao.save(roomy_info);
		
		return roomy_info;
	
	}



	public void deleteroomy(int roomyid) {
		rdao.deleteById(roomyid);
		
		
	}


//	@Override
//	public Roomy_info findRoomy(String username,String password) {
//		// TODO Auto-generated method stub
//		
//		Roomy_info roomy = rdao.findRoomy(username,password);
//		if(roomy != null) {
//			return roomy;
//		}
//		return null;
//	}




//	@Override
//	public Optional<Roomy_info> getByName(String username, String password) {
//		Optional<Roomy_info> op=rdao.findRoomy(username,password);
//		//if(op.isPresent()) {
//			System.out.println(op);
//		return Optional.ofNullable(op.get());
//	}




	@Override
	public Roomy_info findRoomy(Login login) {
		// TODO Auto-generated method stub
		String username = login.getUsername();
		String password = login.getPassword();
		Roomy_info roomy = rdao.findRoomy(username, password);
		if(roomy != null) {
			return roomy;
		}
		else {
			return null;
		}
	}




	@Override
	public Optional<Roomy_info> getByName(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Optional<Roomy_info> getById(int rid) {
		Optional<Roomy_info> op=rdao.findById(rid);
		//if(op.isPresent()) {
			System.out.println(op);
		return Optional.ofNullable(op.get());
		
	}

//
//	@Override
//	public void getProperty(int roomyid) {
//		rdao.getUsersProperty(roomyid);
//		
//	}
//

	

}
            












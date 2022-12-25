package com.demo.service;

import java.util.List;
import java.util.Optional;

import com.demo.beans.Login;
import com.demo.beans.Roomy_info;

public interface RoomyService {

	Roomy_info addroomy(Roomy_info roomy_info);

	




	Roomy_info updateRoomyInfo(Roomy_info roomy_info);



	void deleteroomy(int roomyid);



	Roomy_info findRoomy(Login login);



	Optional<Roomy_info> getByName(String username, String password);






	Optional<Roomy_info> getById(int rid);




}

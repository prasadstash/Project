package com.demo.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.JpaRepositoryConfigExtension;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.demo.beans.Property;
import com.demo.beans.Roomy_info;

@Repository
public interface RoomieDao extends JpaRepository<Roomy_info,Integer>{

	
	@Query(value="select * from roomy_info_tbl where username = :username and password = :password", nativeQuery=true)
	Roomy_info findRoomy(@Param("username") String username, @Param("password") String password);
  
	
	
	//@Query(value="select * from Property,roomy_info_tbl inner join property_tbl where pid=1")
	//a@Query(value="select * from roomy_info_tbl where pid_pid is not null and roomid=1;")
	//void getUsersProperty(int roomyid);
  
	
	
}

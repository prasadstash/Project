package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.demo.beans.Property;

public interface PropertyDao extends JpaRepository<Property, Integer>{

	@Query(value="select * from property_tbl where city = :city" ,nativeQuery=true)
	Property searchByCity(@Param("city") String city);
	
	@Query(value="select distinct city from property_tbl" ,nativeQuery=true)
	List<String> searchCity();


}

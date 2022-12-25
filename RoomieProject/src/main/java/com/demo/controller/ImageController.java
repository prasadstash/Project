package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.beans.Image;
import com.demo.service.ImageService;



@RestController
@RequestMapping("/image")
@CrossOrigin(origins="http://localhost:3000" , allowedHeaders = "*" )

public class ImageController {
	
	@Autowired
	private ImageService imageService;
	//-------add Image----------
	@PostMapping
	public Image addImage(@RequestBody Image image) {
    return imageService.addImage(image);
 
}
	
	//------fetching a Image through id------
	@GetMapping("{img_id}")
	public Image getOne(@RequestParam int img_id) {
		return imageService.getById(img_id);
	}
	
	//------Delete Image through id------
		@DeleteMapping("{img_id}")
		public void deleteimage(@PathVariable int img_id) {
			imageService.deleteimage(img_id);
			
		}
		
	//---get image with perticular property-------
//		@GetMapping("/Image/{img_id}")
//		public void getByPid(@PathVariable int img_id) {
//			imageService.getproperty(img_id);
//		}
}
package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.beans.Image;

import com.demo.dao.ImageDao;

@Service
public class ImageServiceImpl implements ImageService {

	
	@Autowired
	private ImageDao idao;

	@Override
	public Image addImage(Image image) {
		idao.save(image);
		return image ;
	}

	@Override
	public Image getById(int img_id) {
        return idao.getOne(img_id);
	}

	@Override
	public void deleteimage(int img_id) {
		idao.deleteById(img_id);
		
	}

//	@Override
//	public void getproperty(int img_id) {
//		idao.getUserProperty(img_id);
//		
//	}
	

	



}

package com.demo.service;

import com.demo.beans.Image;

public interface ImageService {

	Image addImage(Image image);

	Image getById(int img_id);

	void deleteimage(int img_id);

//	void getproperty(int img_id);
}

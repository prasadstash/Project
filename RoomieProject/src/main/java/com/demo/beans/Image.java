package com.demo.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="img_tbl")
public class Image {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int img_id;
	private String img_url;
	@ManyToOne
	private Property pid;
	public Image() {
		super();
	}
	public Image(int img_id, String img_url, Property pid) {
		super();
		this.img_id = img_id;
		this.img_url = img_url;
		this.pid = pid;
	}
	public int getImg_id() {
		return img_id;
	}
	public void setImg_id(int img_id) {
		this.img_id = img_id;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public Property getPid() {
		return pid;
	}
	public void setPid(Property pid) {
		this.pid = pid;
	}

}

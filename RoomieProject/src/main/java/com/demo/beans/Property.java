package com.demo.beans;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
@Table(name="property_tbl")
public class Property {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int pid;
	private String p_name;
	private int flat_no;
	private String society_name;
	private String area;
	private String city;
	private String state;
	private double pincode;
	private double price;
	private int no_Of_Seats;
	private int bhk;
	private String furnished_status;
	private String gender;
	private double maintenance;
	@Temporal(TemporalType.DATE)
	private Date date = new Date(System.currentTimeMillis());
	
	@Column(length=200)
	private String description;
	@JsonFormat(pattern = "dd-MM-yyyy", shape = Shape.STRING )
	private String available_from;
	@Column(columnDefinition = "TINYINT", length = 1)
	private boolean wifi;
	@Column(columnDefinition = "TINYINT", length = 1)
	private boolean water;
	@Column(columnDefinition = "TINYINT", length = 1)
	private boolean washing_machine;
	@Column(columnDefinition = "TINYINT", length = 1)
	private boolean tv;
	@OneToMany(cascade = CascadeType.ALL, mappedBy="pid")
	private List<Roomy_info> roomyid =  new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy="pid")
	private List<Image> img_id = new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy="pid")
	private List<Que_Ans> qid  = new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy="pid")
	private List<feedback> feed  = new ArrayList<>();

	public Property() {
		super();
	}
	
	public Property(int pid, String p_name, int flat_no, String society_name, String area, String city, String state,
			double pincode, double price, int no_Of_seats, int bhk, String furnished_status, String gender,
			double maintenance, String description, String available_from, boolean wifi, boolean water,
			boolean washing_Machine, boolean tv, List<Roomy_info> roomyid, List<Image> img_id, List<Que_Ans> qid,
			List<feedback> feed) {
		super();
		this.pid = pid;
		this.p_name = p_name;
		this.flat_no = flat_no;
		this.society_name = society_name;
		this.area = area;
		this.city = city;
		this.state = state;
		this.pincode = pincode;
		this.price = price;
		this.no_Of_Seats = no_Of_seats;
		this.bhk = bhk;
		this.furnished_status = furnished_status;
		this.gender = gender;
		this.maintenance = maintenance;
		this.description = description;
		this.available_from = available_from;
		this.wifi = wifi;
		this.water = water;
		this.washing_machine = washing_machine;
		this.tv = tv;
		this.roomyid = roomyid;
		this.img_id = img_id;
		this.qid = qid;
		this.feed = feed;
	}

	

	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getP_name() {
		return p_name;
	}
	public void setP_name(String p_name) {
		this.p_name = p_name;
	}
	
	public String getArea() {
		return area;
	}
	public void setArea(String area) {
		this.area = area;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public double getPincode() {
		return pincode;
	}
	public void setPincode(double pincode) {
		this.pincode = pincode;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	public int getBhk() {
		return bhk;
	}
	public void setBhk(int bhk) {
		this.bhk = bhk;
	}
	
	
	public List<Roomy_info> getRoomyid() {
		return roomyid;
	}
	public void setRoomyid(List<Roomy_info> roomyid) {
		this.roomyid = roomyid;
	}
	public List<Image> getImg_id() {
		return img_id;
	}
	public void setImg_id(List<Image> img_id) {
		this.img_id = img_id;
	}
	public List<Que_Ans> getQid() {
		return qid;
	}
	public void setQid(List<Que_Ans> qid) {
		this.qid = qid;
	}
	public List<feedback> getFeed() {
		return feed;
	}
	public void setFeed(List<feedback> feed) {
		this.feed = feed;
	}
	
	

	public int getNo_Of_Seats() {
		return no_Of_Seats;
	}

	public void setNo_Of_Seats(int no_Of_Seats) {
		this.no_Of_Seats = no_Of_Seats;
	}

	

	public int getFlat_no() {
		return flat_no;
	}

	public void setFlat_no(int flat_no) {
		this.flat_no = flat_no;
	}

	public String getSociety_name() {
		return society_name;
	}

	public void setSociety_name(String society_name) {
		this.society_name = society_name;
	}

	public String getFurnished_status() {
		return furnished_status;
	}

	public void setFurnished_status(String furnished_status) {
		this.furnished_status = furnished_status;
	}

	public String getAvailable_from() {
		return available_from;
	}

	public void setAvailable_from(String available_from) {
		this.available_from = available_from;
	}

	public boolean isWashing_machine() {
		return washing_machine;
	}

	public void setWashing_machine(boolean washing_machine) {
		this.washing_machine = washing_machine;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public double getMaintenance() {
		return maintenance;
	}
	public void setMaintenance(double maintenance) {
		this.maintenance = maintenance;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	public boolean isWifi() {
		return wifi;
	}
	public void setWifi(boolean wifi) {
		this.wifi = wifi;
	}
	public boolean isWater() {
		return water;
	}
	public void setWater(boolean water) {
		this.water = water;
	}
	
	public boolean isTv() {
		return tv;
	}
	public void setTv(boolean tv) {
		this.tv = tv;
	}
	
	
	
}

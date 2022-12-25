package com.demo.beans;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="roomy_info_tbl")
public class Roomy_info {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int roomyid;
    private String first_name;
    private String last_name;
    @Column(unique = true)
    private String username;
    private String password;
    private String email;
    @Column(length=10)
    private long contact;
    private String gender;
    private String DOB;
    private Date arrivingDate;
    private LocalDate date;
    private int age;
    private String occupation;
    private String image;
	@Column(columnDefinition = "TINYINT", length = 1)
    private boolean veg_nonveg;
	@Column(columnDefinition = "TINYINT", length = 1)
    private boolean noalcohol;
	@Column(columnDefinition = "TINYINT", length = 1)
    private boolean smoker;
	@Column(columnDefinition = "TINYINT", length = 1)
    private boolean wanderer;
	@Column(columnDefinition = "TINYINT", length = 1)
    private boolean fitness_freak;
    @ManyToOne(cascade = CascadeType.ALL)
    private Property pid;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="que_rid")
	private List<Que_Ans> que  = new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy="ans_rid")
	private List<Que_Ans> ans  = new ArrayList<>();
	@OneToMany(cascade = CascadeType.ALL, mappedBy="rid")
	private List<feedback> feed  = new ArrayList<>();
    
    
	public Roomy_info() {
		super();
	}



	

	




	public Roomy_info(int roomyid, String first_name, String last_name, String username, String password, String email,
			long contact, String gender, String dOB, Date arrivingDate, LocalDate date, int age, String occupation,
			String image, boolean veg_nonveg, boolean noalcohol, boolean smoker, boolean wanderer,
			boolean fitness_freak, Property pid, List<Que_Ans> que, List<Que_Ans> ans, List<feedback> feed) {
		super();
		this.roomyid = roomyid;
		this.first_name = first_name;
		this.last_name = last_name;
		this.username = username;
		this.password = password;
		this.email = email;
		this.contact = contact;
		this.gender = gender;
		this.DOB = dOB;
		this.arrivingDate = arrivingDate;
		this.date = date;
		this.age = age;
		this.occupation = occupation;
		this.image = image;
		this.veg_nonveg = veg_nonveg;
		this.noalcohol = noalcohol;
		this.smoker = smoker;
		this.wanderer = wanderer;
		this.fitness_freak = fitness_freak;
		this.pid = pid;
		this.que = que;
		this.ans = ans;
		this.feed = feed;
	}










	public Date getArrivingDate() {
		return arrivingDate;
	}





	public void setArrivingDate(Date arrivingDate) {
		this.arrivingDate = arrivingDate;
	}





	public LocalDate getDate() {
		return date;
	}





	public void setDate(LocalDate date) {
		date = LocalDate.now();
		this.date = date;
	}





	public Property getPid() {
		return pid;
	}





	public void setPid(Property pid) {
		this.pid = pid;
	}





	public List<Que_Ans> getQue() {
		return que;
	}





	public void setQue(List<Que_Ans> que) {
		this.que = que;
	}





	public List<Que_Ans> getAns() {
		return ans;
	}





	public void setAns(List<Que_Ans> ans) {
		this.ans = ans;
	}





	public List<feedback> getFeed() {
		return feed;
	}





	public void setFeed(List<feedback> feed) {
		this.feed = feed;
	}





	public int getRoomyid() {
		return roomyid;
	}



	public void setRoomyid(int roomyid) {
		this.roomyid = roomyid;
	}



	public String getFirst_name() {
		return first_name;
	}



	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}



	public String getLast_name() {
		return last_name;
	}



	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public long getContact() {
		return contact;
	}



	public void setContact(long contact) {
		this.contact = contact;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getDOB() {
		return DOB;
	}



	public void setDOB(String dOB) {
		DOB = dOB;
	}



	



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getOccupation() {
		return occupation;
	}



	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}



	public String getImage() {
		return image;
	}



	public void setImage(String image) {
		this.image = image;
	}



	public boolean isVeg_nonveg() {
		return veg_nonveg;
	}



	public void setVeg_nonveg(boolean veg_nonveg) {
		this.veg_nonveg = veg_nonveg;
	}



	public boolean isAlcoholic() {
		return noalcohol;
	}



	public void setAlcoholic(boolean noalcohol) {
		this.noalcohol = noalcohol;
	}



	public boolean isSmoker() {
		return smoker;
	}



	public void setSmoker(boolean smoker) {
		this.smoker = smoker;
	}



	public boolean isWanderer() {
		return wanderer;
	}



	public void setWanderer(boolean wanderer) {
		this.wanderer = wanderer;
	}



	public boolean isFitness_freak() {
		return fitness_freak;
	}



	public void setFitness_freak(boolean fitness_freak) {
		this.fitness_freak = fitness_freak;
	}



	@Override
	public String toString() {
		return "Roomy_info [userid=" + roomyid + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", username=" + username + ", password=" + password + ", email=" + email + ", contact=" + contact
				+ ", gender=" + gender + ", DOB=" + DOB + ", date_time=" + date + ", age=" + age + ", occupation="
				+ occupation + ", image=" + image + ", veg_nonveg=" + veg_nonveg + ", alcoholic=" + noalcohol
				+ ", smoker=" + smoker + ", wanderer=" + wanderer + ", fitness_freak=" + fitness_freak + "]";
	}
    
    
	

	
}

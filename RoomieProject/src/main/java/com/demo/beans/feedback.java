package com.demo.beans;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class feedback {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int feedbackid;
	private String review;
	private int ratings;
	private Date date_time;
	@ManyToOne
	private Property pid;
	@ManyToOne
	private Roomy_info rid;
	
	
	public feedback() {
		super();
	}


	public feedback(int feedbackid, String review, int ratings, Date date_time) {
		super();
		this.feedbackid = feedbackid;
		this.review = review;
		this.ratings = ratings;
		this.date_time = date_time;
	}


	public int getFeedbackid() {
		return feedbackid;
	}


	public void setFeedbackid(int feedbackid) {
		this.feedbackid = feedbackid;
	}


	public String getReview() {
		return review;
	}


	public void setReview(String review) {
		this.review = review;
	}


	public int getRatings() {
		return ratings;
	}


	public void setRatings(int ratings) {
		this.ratings = ratings;
	}


	public Date getDate_time() {
		return date_time;
	}


	public void setDate_time(Date date_time) {
		this.date_time = date_time;
	}


	@Override
	public String toString() {
		return "feedback [feedbackid=" + feedbackid + ", review=" + review + ", ratings=" + ratings + ", date_time="
				+ date_time + "]";
	}
	
	
}

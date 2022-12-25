package com.demo.beans;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Que_Ans {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int qid;
	private String question;
	private String answer;
	@ManyToOne
	private Roomy_info que_rid;
	@ManyToOne
	private Roomy_info ans_rid;
	private Date date;
	@ManyToOne
	private Property pid;
	public Que_Ans() {
		super();
	}
	public Que_Ans(int qid, String question, String answer, Roomy_info que_rid, Roomy_info ans_rid, Date date, Property pid) {
		super();
		this.qid = qid;
		this.question = question;
		this.answer = answer;
		this.que_rid = que_rid;
		this.ans_rid = ans_rid;
		this.date = date;
		this.pid = pid;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	
	public Roomy_info getQue_rid() {
		return que_rid;
	}
	public void setQue_rid(Roomy_info que_rid) {
		this.que_rid = que_rid;
	}
	public Roomy_info getAns_rid() {
		return ans_rid;
	}
	public void setAns_rid(Roomy_info ans_rid) {
		this.ans_rid = ans_rid;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public Property getPid() {
		return pid;
	}
	public void setPid(Property pid) {
		this.pid = pid;
	}
	
	
	
	
}

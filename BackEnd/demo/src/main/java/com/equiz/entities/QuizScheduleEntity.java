package com.equiz.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="quiz_schedule")
public class QuizScheduleEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="quizid")
	private int quizid;
	
	@Column(name="facultyid")
	private long facultyid;
	
	@Column(name="quiz_name")
	private String quizName;
	
	@Column(name="quiz_desc")
	private String quizDesc;
	
	@Column(name="schedule_date")
	private String scheduleDate;
	
	@Column(name="schedule_time")
	private String scheduleTime;
	
	@Column(name="duration")
	private int duration;
	
	public QuizScheduleEntity() {
		super();
	}


	public QuizScheduleEntity(int quizId, long facid, String quizName, String quizDesc, String scheduleDate,
			String scheduleTime, int duration) {
		super();
		this.quizid = quizId;
		this.facultyid = facid;
		this.quizName = quizName;
		this.quizDesc = quizDesc;
		this.scheduleDate = scheduleDate;
		this.scheduleTime = scheduleTime;
		this.duration = duration;
		
	}


	public int getQuizId() {
		return quizid;
	}


	public void setQuizId(int quizId) {
		this.quizid = quizId;
	}

	public String getQuizName() {
		return quizName;
	}


	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}


	public String getQuizDesc() {
		return quizDesc;
	}


	public void setQuizDesc(String quizDesc) {
		this.quizDesc = quizDesc;
	}


	public String getScheduleDate() {
		return scheduleDate;
	}


	public void setScheduleDate(String scheduleDate) {
		this.scheduleDate = scheduleDate;
	}


	public String getScheduleTime() {
		return scheduleTime;
	}


	public void setScheduleTime(String scheduleTime) {
		this.scheduleTime = scheduleTime;
	}


	public int getDuration() {
		return duration;
	}


	public void setDuration(int duration) {
		this.duration = duration;
	}


	public int getQuizid() {
		return quizid;
	}


	public void setQuizid(int quizid) {
		this.quizid = quizid;
	}


	public long getFacultyid() {
		return facultyid;
	}


	public void setFacultyid(long facultyid) {
		this.facultyid = facultyid;
	}
	
	
}

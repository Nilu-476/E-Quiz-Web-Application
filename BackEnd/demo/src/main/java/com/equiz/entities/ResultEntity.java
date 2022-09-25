package com.equiz.entities;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student_result")
public class ResultEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="result_id")
	private int resultId;
	
	@Column(name = "prn_no")
	private long prnNo;
	
	@Column(name = "quiz_id")
	private int quizid;
	
	@Column(name = "marks")
	private int marks;
	
	@Column(name = "student_name")
	private String studentName;
	
	@Column(name = "quiz_name")
	private String quizName;
	
	@Column(name = "total_marks")
	private int totalMarks;
	
	public ResultEntity() {
		// TODO Auto-generated constructor stub
	}

	public ResultEntity(int resultId, long prnNo, int quizid, int marks, String studentName, String quizName,int total) {
		super();
		this.resultId = resultId;
		this.prnNo = prnNo;
		this.quizid = quizid;
		this.marks = marks;
		this.studentName = studentName;
		this.quizName = quizName;
		this.totalMarks = total;
	}

	public int getResultId() {
		return resultId;
	}

	public void setResultId(int resultId) {
		this.resultId = resultId;
	}

	public long getPrnNo() {
		return prnNo;
	}

	public void setPrnNo(long prnNo) {
		this.prnNo = prnNo;
	}

	public int getQuizid() {
		return quizid;
	}

	public void setQuizid(int quizid) {
		this.quizid = quizid;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getQuizName() {
		return quizName;
	}

	public void setQuizName(String quizName) {
		this.quizName = quizName;
	}

	public int getTotalMarks() {
		return totalMarks;
	}

	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}
	
	
	
}

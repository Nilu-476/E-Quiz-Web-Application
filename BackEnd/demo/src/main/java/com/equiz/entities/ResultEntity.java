package com.equiz.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="student_result")
public class ResultEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="result_id")
	private int resultId;
	
	@Column(name="quiz_given_date")
	private Date quizGivenDate;
	
	@Column(name="marks_obtained")
	private int marksObtained;
	
	@Column(name="total_marks")
	private int totalMarks;	
	
	
	@OneToOne
	@JoinColumn(name="prnno")
	private StudentEntity student;
	
	@OneToOne
	@JoinColumn(name="quizid")
	private QuizScheduleEntity quiz;

	
	public ResultEntity() {
		super();
	}


	public ResultEntity(int resultId, Date quizGivenDate, int marksObtained, int totalMarks, StudentEntity student,
			QuizScheduleEntity quiz) {
		super();
		this.resultId = resultId;
		this.quizGivenDate = quizGivenDate;
		this.marksObtained = marksObtained;
		this.totalMarks = totalMarks;
		this.student = student;
		this.quiz = quiz;
	}


	public int getResultId() {
		return resultId;
	}


	public void setResultId(int resultId) {
		this.resultId = resultId;
	}


	public Date getQuizGivenDate() {
		return quizGivenDate;
	}


	public void setQuizGivenDate(Date quizGivenDate) {
		this.quizGivenDate = quizGivenDate;
	}


	public int getMarksObtained() {
		return marksObtained;
	}


	public void setMarksObtained(int marksObtained) {
		this.marksObtained = marksObtained;
	}


	public int getTotalMarks() {
		return totalMarks;
	}


	public void setTotalMarks(int totalMarks) {
		this.totalMarks = totalMarks;
	}


	public StudentEntity getStudent() {
		return student;
	}


	public void setStudent(StudentEntity student) {
		this.student = student;
	}


	public QuizScheduleEntity getQuiz() {
		return quiz;
	}


	public void setQuiz(QuizScheduleEntity quiz) {
		this.quiz = quiz;
	}


	


	
	
}

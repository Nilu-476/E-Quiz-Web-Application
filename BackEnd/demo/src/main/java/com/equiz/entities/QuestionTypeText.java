package com.equiz.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name="text_question")
public class QuestionTypeText {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="question_id")
	private int questionId;
	
	@Column(name="question_text",columnDefinition = "TEXT")
	@Type(type="text")
	private String questionText;
	
	@Column(name="option1",columnDefinition = "TEXT")
	@Type(type="text")
	private String option1;
	
	@Column(name="option2",columnDefinition = "TEXT")
	@Type(type="text")
	private String option2;
	
	@Column(name="option3",columnDefinition = "TEXT")
	@Type(type="text")
	private String option3;
	
	@Column(name="option4",columnDefinition = "TEXT")
	@Type(type="text")
	private String option4;
	
	@Column(name="correct_answer",columnDefinition = "TEXT")
	@Type(type="text")
	private String correctAnswer;
	
	@Column(name="marks")
	private int marks;
	
	@ManyToOne
	@JoinColumn(name="quizid")
	private QuizScheduleEntity quizschedule;

	@ManyToOne
	@JoinColumn(name="facultyid")
	private FacultyEntity facultyentity;

	public QuestionTypeText() {
		super();
	}

	public QuestionTypeText(int questionId, String questionText, String option1, String option2, String option3,
			String option4, String correctAnswer, int marks, QuizScheduleEntity quizschedule,
			FacultyEntity facultyentity) {
		super();
		this.questionId = questionId;
		this.questionText = questionText;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correctAnswer = correctAnswer;
		this.marks = marks;
		this.quizschedule = quizschedule;
		this.facultyentity = facultyentity;
	}

	public int getQuestionId() {
		return questionId;
	}

	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}

	public String getQuestionText() {
		return questionText;
	}

	public void setQuestionText(String questionText) {
		this.questionText = questionText;
	}

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public String getCorrectAnswer() {
		return correctAnswer;
	}

	public void setCorrectAnswer(String correctAnswer) {
		this.correctAnswer = correctAnswer;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public QuizScheduleEntity getQuizschedule() {
		return quizschedule;
	}

	public void setQuizschedule(QuizScheduleEntity quizschedule) {
		this.quizschedule = quizschedule;
	}

	public FacultyEntity getFacultyentity() {
		return facultyentity;
	}

	public void setFacultyentity(FacultyEntity facultyentity) {
		this.facultyentity = facultyentity;
	}

	
	
	
	
	

}

package com.equiz.entities;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="question_bank")
public class QuestionEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="question_id")
	private int questionId;
	
	@Column(name="question_text")
	private byte[] question;
	
	@Column(name="option1")
	private byte[] option1;
	
	@Column(name="option2")
	private byte[] option2;
	
	@Column(name="option3")
	private byte[] option3;
	
	@Column(name="option4")
	private byte[] option4;
	
	@Column(name="correct_answer")
	private byte[] correctAnswer;
	
	@Column(name="marks")
	private int marks;
	
	@ManyToOne
	@JoinColumn(name="quizid")
	private QuizScheduleEntity quiz;

	@ManyToOne
	@JoinColumn(name="facultyid")
	private FacultyEntity faculty;

	
	public QuestionEntity() {
		super();
	}


	public QuestionEntity(int questionId, byte[] question, byte[] option1, byte[] option2, byte[] option3,
			byte[] option4, byte[] correctAnswer, int marks, QuizScheduleEntity quiz, FacultyEntity faculty) {
		super();
		this.questionId = questionId;
		this.question = question;
		this.option1 = option1;
		this.option2 = option2;
		this.option3 = option3;
		this.option4 = option4;
		this.correctAnswer = correctAnswer;
		this.marks = marks;
		this.quiz = quiz;
		this.faculty = faculty;
	}


	public int getQuestionId() {
		return questionId;
	}


	public void setQuestionId(int questionId) {
		this.questionId = questionId;
	}


	public byte[] getQuestion() {
		return question;
	}


	public void setQuestion(byte[] question) {
		this.question = question;
	}


	public byte[] getOption1() {
		return option1;
	}


	public void setOption1(byte[] option1) {
		this.option1 = option1;
	}


	public byte[] getOption2() {
		return option2;
	}


	public void setOption2(byte[] option2) {
		this.option2 = option2;
	}


	public byte[] getOption3() {
		return option3;
	}


	public void setOption3(byte[] option3) {
		this.option3 = option3;
	}


	public byte[] getOption4() {
		return option4;
	}


	public void setOption4(byte[] option4) {
		this.option4 = option4;
	}


	public byte[] getCorrectAnswer() {
		return correctAnswer;
	}


	public void setCorrectAnswer(byte[] correctAnswer) {
		this.correctAnswer = correctAnswer;
	}


	public int getMarks() {
		return marks;
	}


	public void setMarks(int marks) {
		this.marks = marks;
	}


	public QuizScheduleEntity getQuiz() {
		return quiz;
	}


	public void setQuiz(QuizScheduleEntity quiz) {
		this.quiz = quiz;
	}


	public FacultyEntity getFaculty() {
		return faculty;
	}


	public void setFaculty(FacultyEntity faculty) {
		this.faculty = faculty;
	}
	
	

	
	
	
	
	
}

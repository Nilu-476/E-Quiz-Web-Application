package com.equiz.entities;
import java.util.*;

public class QuestionBank {
	
	private long facultyid;
	private int quizid;
	private List<QuestionTypeText> question_list;
	
	public QuestionBank() {
		super();
	}

	public long getFacultyid() {
		return facultyid;
	}

	public void setFacultyid(long facultyid) {
		this.facultyid = facultyid;
	}

	public int getQuizid() {
		return quizid;
	}

	public void setQuizid(int quizid) {
		this.quizid = quizid;
	}

	public List<QuestionTypeText> getQuestion_list() {
		return question_list;
	}

	public void setQuestion_list(List<QuestionTypeText> question_list) {
		this.question_list = question_list;
	}
	
	
	
}

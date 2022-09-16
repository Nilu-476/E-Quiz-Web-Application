package com.equiz.entities;
import java.util.*;

public class QuestionBank {
	
	private String facultyname;
	private int quizid;
	private List<QuestionTypeText> question_list;
	
	public QuestionBank() {
		super();
	}

	public String getFacultyname() {
		return facultyname;
	}



	public void setFacultyname(String facultyname) {
		this.facultyname = facultyname;
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

package com.equiz.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equiz.entities.FacultyEntity;
import com.equiz.entities.QuestionBank;
import com.equiz.entities.QuestionTypeText;
import com.equiz.repositories.FacultyRepo;
import com.equiz.repositories.QuestionTextRepo;

@CrossOrigin
@RestController
@RequestMapping(path = "managequestion")
public class QuestionController {
	
	public QuestionController()
	{
		System.out.println("QuestionController created");
	}
	@Autowired
	FacultyRepo fac_repo;
	
	@Autowired
	QuestionTextRepo question_repo;
	
	
	@PostMapping(value="/addquestion")
	public String addQuestion(@RequestBody QuestionBank question_info )
	{
		
		String fac_name = question_info.getFacultyname();
		FacultyEntity fac_obj = fac_repo.findByUserName(fac_name);
		int facid=fac_obj.getFacultyId();
		
		List<QuestionTypeText> q_list = question_info.getQuestion_list();
		
		for(QuestionTypeText q : q_list)
		{
			q.getFacultyentity().setFacultyId(facid);
			q.getQuizschedule().setQuizId(question_info.getQuizid());
			question_repo.save(q);
			
		}
		return "Question Added...";
	}
	
	
	@PostMapping(value="/updatequestion")
	public String EditQuestionDetails(@RequestBody QuestionTypeText question)
	{
		if(question.getQuestionText() != "")
		{
			question_repo.updateQuestionText(question.getQuestionText(), question.getQuestionId());
		}
		if(question.getOption1() != "")
		{
			question_repo.updateOption1(question.getOption1(), question.getQuestionId());
		}
		if(question.getOption2() != "")
		{
			question_repo.updateOption2(question.getOption2(), question.getQuestionId());
		}
		
		if(question.getOption3() != "")
		{
			question_repo.updateOption3(question.getOption3(), question.getQuestionId());
		}
		if(question.getOption4() != "")
		{
			question_repo.updateOption4(question.getOption4(), question.getQuestionId());
		}
		if(question.getCorrectAnswer()!="")
		{
			question_repo.updateCorrectAnswer(question.getCorrectAnswer(),  question.getQuestionId());
		}
		if(question.getMarks()!=0)
		{
			question_repo.updateMarks(question.getMarks(), question.getQuestionId());
		}
		
		return "Question Updated.....";
	}

	@PostMapping(value="/deletequestion/{questionid}")
	public String DeleteQuestion(@PathVariable int questionid)
	{
		if(questionid !=0)
		{
			question_repo.deleteById(questionid);
		}
		
		return "Question deleted......";
		
		
	}
	
	
	

}

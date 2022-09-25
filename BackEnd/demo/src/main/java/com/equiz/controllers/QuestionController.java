package com.equiz.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equiz.entities.FacultyEntity;
import com.equiz.entities.QuestionTypeText;
import com.equiz.repositories.FacultyRepo;
import com.equiz.repositories.QuestionTextRepo;

@CrossOrigin("http://localhost:3000")
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
	
	
	@PostMapping(value="/addquestion/{facultyname}")
	public String addQuestion(@RequestBody QuestionTypeText question_info,@PathVariable String facultyname )
	{
		FacultyEntity fac_obj = fac_repo.findByUserName(facultyname);
		long facid=fac_obj.getFacultyId();
		question_info.setFacultyid(facid);
		question_repo.save(question_info);
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
	
	@GetMapping(value="/getallquestion/{quizid}")
	public List<QuestionTypeText> Getallquestions(@PathVariable int quizid)
	{
		//int totalMarks=0;
		List<QuestionTypeText> qlist = question_repo.findAll();
		List<QuestionTypeText> questionlist =new ArrayList<QuestionTypeText>();
		
		for(QuestionTypeText q : qlist)
		{
			if(q.getQuizid() == quizid)
			{
				questionlist.add(q);
			}
		}
		
		return questionlist;	
	}
	
	@GetMapping(value="/getquestionbyid/{qid}")
	public QuestionTypeText getQuestionById(@PathVariable int qid)
	{
		Optional<QuestionTypeText> question_obj = question_repo.findById(qid);
		
		return question_obj.get();
		
	}
	
}

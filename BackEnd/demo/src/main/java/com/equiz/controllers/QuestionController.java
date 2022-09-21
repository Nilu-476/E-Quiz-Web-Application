package com.equiz.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equiz.entities.FacultyEntity;
import com.equiz.entities.QuestionBank;
import com.equiz.entities.QuestionTypeText;
import com.equiz.entities.QuizScheduleEntity;
import com.equiz.repositories.FacultyRepo;
import com.equiz.repositories.QuestionTextRepo;
import com.equiz.repositories.QuizScheduleRepo;

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
	
	@Autowired
	QuizScheduleRepo quizrepo;


	
	@PostMapping(value = "/addquestion/{qid}")//add question by quiz id
	public ResponseEntity<QuestionTypeText> addQuestion(@RequestBody QuestionTypeText question,@PathVariable  int qid)
	{
		String facuname = question.getFacultyentity().getUserName();
		FacultyEntity f = fac_repo.findByUserName(facuname);
		
		try {
			Optional<QuizScheduleEntity> qobj = quizrepo.findById(qid);
			QuizScheduleEntity obj=qobj.get();
			
			QuestionTypeText obj1 = question_repo.save(new QuestionTypeText(0,question.getQuestionText(),question.getOption1(),
					question.getOption2(),question.getOption3(),question.getOption4(),question.getCorrectAnswer(),question.getMarks(),obj,f));
			return new ResponseEntity<>(obj1, HttpStatus.CREATED);
		}catch(Exception e)
		{
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
		
	}
	

	
	
	@GetMapping(value="/getquestionbyid/{qid}")
	public QuestionTypeText getQuestionById(@PathVariable int qid)
	{
		Optional<QuestionTypeText> question_obj = question_repo.findById(qid);
		
		return question_obj.get();
		
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
	public List<QuestionTypeText> GetallquestionsByQuizId(@PathVariable int quizid)
	{
		List<QuestionTypeText> qlist = question_repo.findAll();
		List<QuestionTypeText> questionlist =new ArrayList<QuestionTypeText>();
		
		for(QuestionTypeText q : qlist)
		{
			int qid = q.getQuizschedule().getQuizId();
			if( qid == quizid)//comparing the questions by particular quiz id
			{
				questionlist.add(q);
			}
		}
		
		return questionlist;	
	}
	
	
	@PostMapping(value="/editquestion/{qid}")
	public ResponseEntity<QuestionTypeText> editQuestionDetails(@RequestBody QuestionTypeText question,@PathVariable int qid)
	{
		Optional<QuestionTypeText> obj = question_repo.findById(qid);
		if(obj.isPresent())
		{
			QuestionTypeText que_obj = obj.get();
			que_obj.setQuestionText(question.getQuestionText());
			que_obj.setOption1( question.getOption1() );
			que_obj.setOption2( question.getOption2() );
			que_obj.setOption3( question.getOption3() );
			que_obj.setOption4( question.getOption4() );
			que_obj.setCorrectAnswer( question.getCorrectAnswer() );
			que_obj.setMarks(question.getMarks());
			
			try {
				return new ResponseEntity<>(question_repo.save(que_obj), HttpStatus.OK);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		else
		{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return null;
	}
	

}

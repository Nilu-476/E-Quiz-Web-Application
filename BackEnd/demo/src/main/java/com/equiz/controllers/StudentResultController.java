package com.equiz.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equiz.entities.QuestionTypeText;
import com.equiz.entities.QuizScheduleEntity;
import com.equiz.entities.ResultEntity;
import com.equiz.entities.StudentEntity;
import com.equiz.repositories.QuestionTextRepo;
import com.equiz.repositories.QuizScheduleRepo;
import com.equiz.repositories.ResultRepository;
import com.equiz.repositories.StudentRepo;

@CrossOrigin("*")
@RestController
@RequestMapping(path="result")
public class StudentResultController {
	
	public StudentResultController()
	{
		System.out.println("Student Controller Created");
	}
	
	@Autowired
	StudentRepo studrepo;
	
	@Autowired
	ResultRepository resRepo;
	
	@Autowired
	QuestionTextRepo queRepo;
	
	@Autowired
	QuizScheduleRepo qrepo;
	
	
	
	@PostMapping(value="/addstudentresult/{quizid}")
	public ResponseEntity<ResultEntity> addStudentResult(@RequestBody ResultEntity result,@PathVariable int quizid)
	{
		String studUname=result.getStudent().getUsername();
		StudentEntity obj = studrepo.findByUsername(studUname);
		Date date = new Date(); 
		try {
			Optional<QuizScheduleEntity> quiz = qrepo.findById(quizid);
			QuizScheduleEntity quizobj = quiz.get();
			
			int totalMarks=0;//
			List<QuestionTypeText> qlist = queRepo.findByQuizschedule(quizid);
			for(QuestionTypeText q: qlist)
			{
				totalMarks = totalMarks + q.getMarks();
			}
			
			ResultEntity res = resRepo.save(new ResultEntity(0,date,result.getMarksObtained(),
					totalMarks,obj,quizobj)); //changed
			return new ResponseEntity<>(res, HttpStatus.CREATED);
			
		}catch(Exception e)
		{
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR); 
		}
	}
	
	@GetMapping(value = "/getallquizresult/{username}")
	public List<ResultEntity> getAllResults(@PathVariable String username)
	{
		StudentEntity s = studrepo.findByUsername(username);
		List<ResultEntity> l = new ArrayList<ResultEntity>();
		
		List<ResultEntity> results = resRepo.findAll();
		for(ResultEntity r : results)
		{
			if(r.getStudent().getUsername().equals(s.getUsername()))
			{
				l.add(r);
			}
		}
		
		return l;
	}
	
	@GetMapping(value = "/getallquizresultbyid/{quizid}")
	public List<ResultEntity> getAllResults(@PathVariable int quizid)
	{
		QuizScheduleEntity q = qrepo.findByQuizid(quizid);
		
		List<ResultEntity> l = new ArrayList<ResultEntity>();
		
		List<ResultEntity> results = resRepo.findAll();
		for(ResultEntity r : results)
		{
			if(r.getQuiz().getQuizId()==(q.getQuizId()))
			{
				l.add(r);
			}
		}
		
		return l;
	}
	
	@GetMapping(value = "/GetAllResult")
	public List<ResultEntity> GetAll()
	{
		List<ResultEntity> list=resRepo.findAll();
		return list;
	}
	
	@GetMapping(value = "/deletestudentresult/{username}")
	public String deleteStudentResult(@PathVariable String username)
	{
		StudentEntity s = studrepo.findByUsername(username);
		
		boolean flag = false;
		
		List<ResultEntity> results = resRepo.findAll();
		for(ResultEntity r : results)
		{
			if(r.getStudent().getUsername().equals(s.getUsername()))
			{
				resRepo.delete(r);
				flag = true;
			}
		
		}
		
		if(flag)
			return "Results deleted successfully ";
		else
			return "Results not deleted";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}

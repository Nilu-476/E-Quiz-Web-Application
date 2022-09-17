package com.equiz.controllers;

import java.util.ArrayList;
import java.util.List;
//import java.util.Optional;
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
import com.equiz.entities.QuizScheduleEntity;
import com.equiz.repositories.FacultyRepo;
import com.equiz.repositories.QuestionTextRepo;
import com.equiz.repositories.QuizScheduleRepo;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "quizschedule")
public class QuizScheduleController {
	
	@Autowired
	QuizScheduleRepo quiz_schedule_repo;
	
	@Autowired
	FacultyRepo fac_repo;
	
	@Autowired
	QuestionTextRepo question_repo;
	
	public QuizScheduleController()
	{
		System.out.println("quiz schedule controller created");
		
	}
	
	@PostMapping(value="/addquizschedule")
	public String addQuizSchedule(@RequestBody QuizScheduleEntity quiz_schedule_obj)
	{
		String fac_uname = quiz_schedule_obj.getTeacher().getUserName();
		FacultyEntity fac_obj = fac_repo.findByUserName(fac_uname);
		quiz_schedule_obj.getTeacher().setFacultyId(fac_obj.getFacultyId());
		
		quiz_schedule_repo.save(quiz_schedule_obj);
		
		return "quiz schedule Added..";
	}
	
	@GetMapping(value="/viewschedule/{facuname}")
	public List<QuizScheduleEntity> Get_All_Quiz_Schedule_Details(@PathVariable String facuname)
	{
		List<QuizScheduleEntity> quiz_timetable =new ArrayList<QuizScheduleEntity>();
		
		FacultyEntity fac_obj = fac_repo.findByUserName(facuname);
		long facid=fac_obj.getFacultyId();
		List<QuizScheduleEntity> quiz_schedule = quiz_schedule_repo.findAll(); 
		
		for(QuizScheduleEntity q : quiz_schedule)
		{
			if(q.getTeacher().getFacultyId() == facid)
			{
				quiz_timetable.add(q);
			}
		}
		return quiz_timetable;
		
	}
	
	
	@PutMapping(value="/editquizschedule/{quizid}")
	public ResponseEntity<QuizScheduleEntity> editSchedule(@RequestBody QuizScheduleEntity q,@PathVariable int quizid)
	{
		Optional<QuizScheduleEntity> obj = quiz_schedule_repo.findById(quizid);
		
		if(obj.isPresent())
		{
			QuizScheduleEntity obj1 = obj.get();
			obj1.setQuizName(q.getQuizName());
			obj1.setQuizDesc(q.getQuizDesc());
			obj1.setScheduleDate(q.getScheduleDate());
			obj1.setScheduleTime(q.getScheduleTime());
			obj1.setDuration(q.getDuration());
			try {
				return new ResponseEntity<>(quiz_schedule_repo.save(obj1), HttpStatus.OK);
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
	
	@PostMapping(value="/deleteschedule/{quizid}")
	public String delete_Quiz_schedule(@PathVariable int quizid)
	{
		Optional<QuizScheduleEntity> quiz = quiz_schedule_repo.findById(quizid);
		
		if(quiz.isPresent())
		{
			question_repo.deleteByQuizschedule(quizid);
			quiz_schedule_repo.deleteById(quizid);
		}
		else {
			return "Quiz schedule Not Availaible...";
		}
		
		return "Quiz schedule deleted...";
	}
	
	@GetMapping(value="/getschedulebyid/{quizid}")
	public QuizScheduleEntity getQuizScheduleById(@PathVariable int quizid)
	{
		Optional<QuizScheduleEntity> quiz_obj = quiz_schedule_repo.findById(quizid);
		return quiz_obj.get();
	}
	
	

}

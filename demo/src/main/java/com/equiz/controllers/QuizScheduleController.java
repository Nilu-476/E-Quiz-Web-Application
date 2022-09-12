package com.equiz.controllers;

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

import com.equiz.entities.QuizScheduleEntity;
import com.equiz.repositories.FacultyRepo;
import com.equiz.repositories.QuizScheduleRepo;

@CrossOrigin
@RestController
@RequestMapping(path = "quizscheule")
public class QuizScheduleController {
	
	@Autowired
	QuizScheduleRepo quiz_schedule_repo;
	
	@Autowired
	FacultyRepo fac_repo;
	
	public QuizScheduleController()
	{
		System.out.println("quiz schedule controller created");
		
	}
	
	@PostMapping(value="/addquizschedule")
	public String addQuizSchedule(@RequestBody QuizScheduleEntity quiz_schedule_obj)
	{
		String fac_uname = quiz_schedule_obj.getTeacher().getUserName();
		int fac_id = fac_repo.findByUserName1(fac_uname);
		quiz_schedule_obj.getTeacher().setFacultyId(fac_id);
		
		quiz_schedule_repo.save(quiz_schedule_obj);
		
		return "quiz schedule Added..";
	}
	
	@GetMapping(value="/")
	public List<QuizScheduleEntity> Get_All_Quiz_Schedule_Details()
	{
		List<QuizScheduleEntity> quiz_schedule_List = quiz_schedule_repo.findAll(); 
		return quiz_schedule_List;
		
	}
	
	@PostMapping(value="/updateschedule")
	public String  updateQuizSchedule(@RequestBody  QuizScheduleEntity  quiz_schedule)
	{
		
		if(quiz_schedule.getQuizName()!= "")
		{
			quiz_schedule_repo.updateQuizName(quiz_schedule.getQuizName(), quiz_schedule.getQuizId());
		}
		if(quiz_schedule.getQuizDesc()!="")
		{
			quiz_schedule_repo.updateQuizDesc(quiz_schedule.getQuizDesc(), quiz_schedule.getQuizId());
		}
		if(quiz_schedule.getScheduleDate()!="")
		{
			quiz_schedule_repo.updateScheduleDate(quiz_schedule.getScheduleDate(), quiz_schedule.getQuizId());
		}
		if(quiz_schedule.getScheduleTime()!="")
		{
			quiz_schedule_repo.updateScheduleTime(quiz_schedule.getScheduleTime(), quiz_schedule.getQuizId());
		}
		if(quiz_schedule.getDuration()!= 0)
		{
			quiz_schedule_repo.updateDuration(quiz_schedule.getDuration(), quiz_schedule.getQuizId());
		}
		if(quiz_schedule.getTotalMarks()!=0)
		{
			quiz_schedule_repo.updateTotalMarks(quiz_schedule.getTotalMarks(), quiz_schedule.getQuizId());
		}
		
		return "Quiz schedule Updated...";
		
	}
	
	@PostMapping(value="/deleteschedule/{quizid}")
	public String delete_Quiz_schedule(@PathVariable int quizid)
	{
		Optional<QuizScheduleEntity> quiz = quiz_schedule_repo.findById(quizid);
		
		if(quiz.isPresent())
		{
			quiz_schedule_repo.deleteById(quizid);
		}
		else {
			return "Quiz schedule Not Availaible...";
		}
		
		return "Quiz schedule deleted...";
	}
	
	

}

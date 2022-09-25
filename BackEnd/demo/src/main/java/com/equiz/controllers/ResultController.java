package com.equiz.controllers;

import java.util.Calendar;
import java.util.GregorianCalendar;
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

import com.equiz.entities.QuizScheduleEntity;
import com.equiz.entities.ResultEntity;
import com.equiz.entities.StudentEntity;
import com.equiz.repositories.QuizScheduleRepo;
import com.equiz.repositories.ResultRepo;
import com.equiz.repositories.StudentRepo;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "result")
public class ResultController 
{
	@Autowired
	QuizScheduleRepo quizScheduleRepo;
	
	@Autowired
	StudentRepo studentRepo;
	
	@Autowired
	ResultRepo resultRepo;
	
	@PostMapping("/saveresult/{uname}")
	public String saveResult(@RequestBody ResultEntity result, @PathVariable String uname)
	{
		StudentEntity stud = studentRepo.findByUsername(uname);
		Optional<QuizScheduleEntity> obj = quizScheduleRepo.findById(result.getQuizid());
		QuizScheduleEntity quiz = obj.get();
		
		result.setStudentName(stud.getFirstName()+" "+stud.getMiddleName()+" "+stud.getLastName());
		result.setPrnNo(stud.getPrnNo());
		result.setQuizName(quiz.getQuizName());
		
		resultRepo.save(result);
		return "saved";
	}
	
	@GetMapping("/getbystud/{uname}")
	public List<ResultEntity> getResultForStudent(@PathVariable String uname)
	{
		StudentEntity stud = studentRepo.findByUsername(uname);
		List<ResultEntity> result = resultRepo.findByPrnNo(stud.getPrnNo());
		return result;
	}
	
	@GetMapping("/getbyquiz/{quizid}")
	public List<ResultEntity> getResultForFaculty(@PathVariable int quizid)
	{
		List<ResultEntity> result = resultRepo.findByQuizid(quizid);
		return result;
	}
	
	@GetMapping("/attemptinfo/{uname}")
	public List<Integer> attemptinfo(@PathVariable String uname)
	{
		StudentEntity stud = studentRepo.findByUsername(uname);
		long prn = stud.getPrnNo();
		GregorianCalendar gcal = new GregorianCalendar();
		int day = gcal.get(Calendar.DATE);
		int month=gcal.get(Calendar.MONTH)+1;
		int year = gcal.get(Calendar.YEAR);
		String date="";
		String day1="";
		String mon = "";
		if(day<10)
		{
			day1 = "0"+day;
		}
		else
		{
			day1 = ""+day;
		}
		if(month<10)
		{
			mon = "0"+month;
		}
		else
		{
			mon = ""+month;
		}
		date = year+"-"+mon+"-"+day1;
		List<Integer> list = resultRepo.findByPrnNo(prn, date);
		return list;
	}
}













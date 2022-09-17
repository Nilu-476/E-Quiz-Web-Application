package com.equiz.controllers;

import java.util.ArrayList;
import java.util.List;

//import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.equiz.entities.QuestionTypeText;
import com.equiz.entities.StudentEntity;
import com.equiz.repositories.QuestionTextRepo;
import com.equiz.repositories.StudentRepo;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "student")
public class StudentController {
	
	@Autowired
	StudentRepo repo;
	
	@Autowired
	QuestionTextRepo question_repo;
	
	public StudentController()
	{
		System.out.println("My Index controller created");
	}
	
	@PostMapping("/inserts")
	public String insert(@RequestBody StudentEntity stud)
	{
		repo.save(stud);
		return "student added....";
	}
	
	@PostMapping(value="/studentlogin/{username}/{password}")
	public String student_Login(@PathVariable String username,@PathVariable String password)
	{
		
		StudentEntity stud_obj = repo.findByUsername(username);
		String uname = stud_obj.getUsername();
		String passwd =stud_obj.getPassword();
		if(uname.equals(username))
		{
			if(passwd.equals(password))
			{
				return "pass";
			}
		}
		
		return "fail";
	}
	
	@GetMapping(value="/getstudentprofile/{uname}")
	public StudentEntity getStudentProfile(@PathVariable String uname)
	{
		StudentEntity stud_info = repo.findByUsername(uname);
		return stud_info;
		
	}
	
	
	@PostMapping(value="/editstudentprofile")
	public String editstudentprofile(@RequestBody StudentEntity stud)
	{
		if(stud.getFirstName() != "")
		{
			repo.updateFirstName(stud.getFirstName(), stud.getPrnNo());
		}
		if(stud.getMiddleName() != "")
		{
			repo.updateMiddleName(stud.getMiddleName(),stud.getPrnNo());
		}
		if(stud.getLastName() != "")
		{
			repo.updateLastName(stud.getLastName(), stud.getPrnNo());
		}
		if(stud.getEmail() != "")
		{
			repo.updateEmail(stud.getEmail(), stud.getPrnNo());
		}
		if(stud.getMobileNo() != 0)
		{
		   repo.updateMobileNo(stud.getMobileNo(), stud.getPrnNo());
		}
		if(stud.getGender()!= "")
		{
			repo.updateGender(stud.getGender(), stud.getPrnNo());
		}
		if(stud.getDateOfBirth()!="")
		{
			repo.updateDateOfBirth(stud.getDateOfBirth(), stud.getPrnNo());
		}
		if(stud.getUsername()!="")
		{
			repo.updateUsername(stud.getUsername(), stud.getPrnNo());
		}
		if(stud.getPassword()!="")
		{
			repo.updatePassword(stud.getPassword(), stud.getPrnNo());
		}
		
		return "profile updated Sucessfully....";
		
		
	}
	
	
	@GetMapping(value="/getallquestion/{quizid}")
	public List<QuestionTypeText> Getallquestions(@PathVariable int quizid)
	{
		List<QuestionTypeText> qlist = question_repo.findAll();
		List<QuestionTypeText> questionlist =new ArrayList<QuestionTypeText>();
		
		for(QuestionTypeText q : qlist)
		{
			if(q.getQuizschedule().getQuizId() == quizid)
			{
				questionlist.add(q);
			}
		}
		
		return questionlist;
		
	}
	
	
	


}

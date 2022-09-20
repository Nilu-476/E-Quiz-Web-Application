package com.equiz.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

//import java.util.ArrayList;

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

import com.equiz.entities.QuestionTypeText;
import com.equiz.entities.QuizScheduleEntity;
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
	
	//Please do no change this .....
	@PostMapping(value="/studentlogin/{username}/{password}")
	public StudentEntity student_Login(@PathVariable String username,@PathVariable String password)
	{
		
		StudentEntity stud_obj = repo.findByUsername(username);
		String uname = stud_obj.getUsername();
		String passwd =stud_obj.getPassword();
		if(uname.equals(username))
		{
			if(passwd.equals(password))
			{
				return stud_obj ;
			}
		}
		
		return null;
	}
	
	@GetMapping(value="/getstudentprofile/{uname}")
	public StudentEntity getStudentProfile(@PathVariable String uname)
	{
		StudentEntity stud_info = repo.findByUsername(uname);
		return stud_info;
		
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

    @PostMapping(value = "/editstudentprofile/{prnno}")
	public ResponseEntity<StudentEntity> editstudentprofile( @PathVariable long prnno ,@RequestBody StudentEntity stud)
	{
		Optional<StudentEntity> obj = repo.findById(prnno);
		
		if(obj.isPresent())
		{
			StudentEntity s = obj.get();
			s.setFirstName(stud.getFirstName());
			s.setMiddleName(stud.getMiddleName());
			s.setLastName(stud.getLastName());
			s.setEmail(stud.getEmail());
			s.setMobileNo(stud.getMobileNo());
			s.setGender(stud.getGender());
			s.setDateOfBirth(stud.getDateOfBirth());
			s.setUsername(stud.getUsername());
			s.setPassword(stud.getPassword());
			
			try {
				return new ResponseEntity<>(repo.save(s), HttpStatus.OK);
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

package com.equiz.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.equiz.entities.StudentEntity;
import com.equiz.repositories.StudentRepo;

@CrossOrigin
@RestController
@RequestMapping(path = "student")
public class StudentController {
	
	@Autowired
	StudentRepo repo;
	
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
		
		ArrayList<StudentEntity> stud_obj = (ArrayList<StudentEntity>) repo.findByUsername(username);
		
		for(StudentEntity s : stud_obj)
		{
			String uname = s.getUsername();
		    String passwd = s.getPassword();
			if(uname.equals(username) && passwd.equals(password))
			{
				return "pass";
			}
		}
		return "Fail";
	}
	
	@PostMapping(value="/getstudentprofile/{uname}")
	public StudentEntity getStudentProfile(@PathVariable String uname)
	{
		StudentEntity stud_info = repo.findByUsername1(uname);
		return stud_info;
		
	}


}

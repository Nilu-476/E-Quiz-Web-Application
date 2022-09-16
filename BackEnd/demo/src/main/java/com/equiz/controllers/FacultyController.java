package com.equiz.controllers;

//import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.equiz.entities.FacultyEntity;
import com.equiz.repositories.FacultyRepo;


@CrossOrigin
@RestController
@RequestMapping(path = "/faculty")
public class FacultyController {
	
	@Autowired
	FacultyRepo repo;
	
	public FacultyController()
	{
		System.out.println("My Index controller created");
	}
	
	@PostMapping(value="/addfaculty")
	public String insert(@RequestBody FacultyEntity faculty)
	{
			repo.save(faculty);
		return "Registrtion successfull..."; 
	}
	
	@PostMapping(value="/facultylogin/{username}/{password}")
	public String faculty_Login(@PathVariable String username,@PathVariable String password)
	{
		
		FacultyEntity fac_obj = repo.findByUserName(username);
		if(fac_obj.getUserName().equals(username) )
		{
			if(fac_obj.getPassword().equals(password))
			{
				return "Pass";
			}
		}
		
		return "Fail";
	}

	@PostMapping(value="/getfacultyprofile/{uname}")
	public FacultyEntity getFacultyProfile(@PathVariable String uname)
	{
		FacultyEntity faculty_info = repo.findByUserName(uname);
		return faculty_info;
		
	}
	
	
	
	
	
}

package com.equiz.controllers;

//import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.equiz.entities.FacultyEntity;
import com.equiz.repositories.FacultyRepo;


@CrossOrigin
@RestController
@RequestMapping(path = "faculty")
public class FacultyController {
	
	@Autowired
	FacultyRepo repo;
	
	public FacultyController()
	{
		System.out.println("My Index controller created");
	}
	
	@PostMapping(value="/addfaculty/{collegecode}")
	public String insert(@RequestBody FacultyEntity faculty,@PathVariable int collegecode)
	{
		if(collegecode == 7834562)
		{
			repo.save(faculty);
			return "Registrtion Successfull...";
		}
		return "Registrtion unsuccessfull..."; 
	}
	
	@PostMapping(value="/facultylogin/{username}/{password}")
	public String faculty_Login(@PathVariable String username,@PathVariable String password)
	{
		
		FacultyEntity fac_obj = repo.findByUserName(username);
		String uname = fac_obj.getUserName();
		String passwd=fac_obj.getPassword();
		if(uname.equals(username) )
		{
			if(passwd.equals(password))
			{
				return "Pass";
			}
		}
		
		return "Fail";
	}

	@GetMapping(value="/getfacultyprofile/{uname}")
	public FacultyEntity getFacultyProfile(@PathVariable String uname)
	{
		FacultyEntity faculty_info = repo.findByUserName(uname);
		return faculty_info;
		
	}
	
	
	
	
	
}

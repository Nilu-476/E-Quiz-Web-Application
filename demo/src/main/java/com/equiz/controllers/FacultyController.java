package com.equiz.controllers;


import java.util.ArrayList;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.equiz.entities.FacultyEntity;
import com.equiz.entities.StudentEntity;
import com.equiz.repositories.FacultyRepo;


@CrossOrigin("*")
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
			return "Registration Successfull...";
		}
		return "Registration unsuccessfull..."; 
	}
	
	@PostMapping(value="/facultylogin/{username}/{password}")
	public String faculty_Login(@PathVariable String username,@PathVariable String password)
	{
		
		ArrayList<FacultyEntity> fac_obj = (ArrayList<FacultyEntity>) repo.findByUserName(username);
		for(FacultyEntity f : fac_obj)
		{
			String uname = f.getUserName();
		    String passwd = f.getPassword();
			if(uname.equals(username) && passwd.equals(password))
			{
				return "pass";
			}
		}
		return "Fail";
	}

	//@GetMapping
	@PostMapping(value="/getfacultyprofile/{uname}")
	public FacultyEntity getFacultyProfile(@PathVariable String uname) //int facultyid
	{
		FacultyEntity faculty_info = repo.findByUserName3(uname);
		return faculty_info;
		
	}
	
	//@PutMapping
	@PostMapping(value="/editfacultyprofile")
	public String editFacultyProfile(@RequestBody FacultyEntity f)
	{
		if(f.getFirstName() != "")
		{
			repo.updateFirstName(f.getFirstName(), f.getFacultyId());
		}
		if(f.getMiddleName() != "")
		{
			repo.updateMiddleName(f.getMiddleName(),f.getFacultyId());
		}
		if(f.getLastName() != "")
		{
			repo.updateLastName(f.getLastName(), f.getFacultyId());
		}
		if(f.getEmail() != "")
		{
			repo.updateEmail(f.getEmail(), f.getFacultyId());
		}
		if(f.getMobileNo() != 0)
		{
		   repo.updateMobileNo(f.getMobileNo(), f.getFacultyId());
		}
		if(f.getGender()!= "")
		{
			repo.updateGender(f.getGender(), f.getFacultyId());
		}
		if(f.getDateOfBirth()!="")
		{
			repo.updateDateOfBirth(f.getDateOfBirth(), f.getFacultyId());
		}
		if(f.getUserName()!="")
		{
			repo.updateUsername(f.getUserName(), f.getFacultyId());
		}
		if(f.getPassword()!="")
		{
			repo.updatePassword(f.getPassword(), f.getFacultyId());
		}
		
		return "profile updated Sucessfully....";
		
		
	}
	
	
}

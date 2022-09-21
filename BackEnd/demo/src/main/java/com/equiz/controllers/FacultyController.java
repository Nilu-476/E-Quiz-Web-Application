package com.equiz.controllers;

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
			return "Registrtion Successfull...";
		}
		return "Registrtion unsuccessfull..."; 
	}
	
	//Please do no change this .....
	@PostMapping(value="/facultylogin/{username}/{password}")
	public FacultyEntity faculty_Login(@PathVariable String username,@PathVariable String password)
	{
		
		FacultyEntity fac_obj = repo.findByUserName(username);
		String uname = fac_obj.getUserName();
		String passwd=fac_obj.getPassword();
		if(uname.equals(username) )
		{
			if(passwd.equals(password))
			{
				return fac_obj;
			}
		}
		
		return null;
	}

        @GetMapping(value="/getfacultyprofile/{uname}")
	public FacultyEntity getFacultyProfile(@PathVariable String uname)
	{
		FacultyEntity faculty_info = repo.findByUserName(uname);
		return faculty_info;
		
	}
	
	
	@PostMapping(value = "/editfacultyprofile/{facultyid}")
	public ResponseEntity<FacultyEntity> editfacultyprofile(@RequestBody FacultyEntity fac, @PathVariable long facultyid)
	{
		Optional<FacultyEntity> obj = repo.findById(facultyid);
		
		if(obj.isPresent())
		{
			FacultyEntity f = obj.get();
			f.setFirstName(fac.getFirstName());
			f.setMiddleName(fac.getMiddleName());
			f.setLastName(fac.getLastName());
			f.setEmail(fac.getEmail());
			f.setMobileNo(fac.getMobileNo());
			f.setGender(fac.getGender());
			f.setDateOfBirth(fac.getDateOfBirth());
			f.setUserName(fac.getUserName());
			f.setPassword(fac.getPassword());
			
			try {
				return new ResponseEntity<>(repo.save(f), HttpStatus.OK);
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

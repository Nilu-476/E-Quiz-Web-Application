package com.equiz.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.equiz.entities.StudentEntity;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long>{
	
	public List<StudentEntity> findByUsername(String uname);
	
	public StudentEntity findByUsername1(String uname);
	
	}

package com.equiz.repositories;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.equiz.entities.StudentEntity;

@Repository
public interface StudentRepo extends JpaRepository<StudentEntity, Long>{
	
	//public List<StudentEntity> findByUsername(String uname);
	
	public StudentEntity findByUsername(String uname);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set first_name=:firstname where prnno=:prnno")
	public void updateFirstName(@Param("firstname") String firstname,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set middle_name=:middlename where prnno=:prnno")
	public void updateMiddleName(@Param("middlename") String middlename,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set last_name=:lastname where prnno=:prnno")
	public void updateLastName(@Param("lastname") String lastname,@Param("prnno") long prnno);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set email=:email where prnno=:prnno")
	public void updateEmail(@Param("email") String email,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set mobile_no=:mobno where prnno=:prnno")
	public void updateMobileNo(@Param("mobno") long mobno,@Param("prnno") long prnno);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set gender=:gender where prnno=:prnno")
	public void updateGender(@Param("gender") String  gender,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set dateofbirth=:dob where prnno=:prnno")
	public void updateDateOfBirth(@Param("dob") String dob,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set username=:uname where prnno=:prnno")
	public void updateUsername(@Param("uname") String uname,@Param("prnno") long prnno);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update student_info set password=:passwd where prnno=:prnno")
	public void updatePassword(@Param("passwd") String passwd,@Param("prnno") long prnno);
	
	}

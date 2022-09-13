package com.equiz.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.equiz.entities.FacultyEntity;

@Repository
public interface FacultyRepo extends JpaRepository<FacultyEntity, Integer>{

	public List<FacultyEntity> findByUserName(String uname);

	public FacultyEntity findByUserName3(String uname);
	
	@Query(nativeQuery = true,value="select facultyid from faculty_info where username=:username")
	public int findByUserName1(@Param("username") String username);

	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set first_name=:firstname where facultyid=:facultyid")
	public void updateFirstName(@Param("firstname") String firstname,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set middle_name=:middlename where facultyid=:facultyid")
	public void updateMiddleName(@Param("middlename") String middlename,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set last_name=:lastname where facultyid=:facultyid")
	public void updateLastName(@Param("lastname") String lastname,@Param("facultyid") int facultyid);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set email=:email where facultyid=:facultyid")
	public void updateEmail(@Param("email") String email,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set mobile_no=:mobno where facultyid=:facultyid")
	public void updateMobileNo(@Param("mobno") long mobno,@Param("facultyid") int facultyid);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set gender=:gender where facultyid=:facultyid")
	public void updateGender(@Param("gender") String  gender,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set dateofbirth=:dob where facultyid=:facultyid")
	public void updateDateOfBirth(@Param("dob") String dob,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set username=:uname where facultyid=:facultyid")
	public void updateUsername(@Param("uname") String uname,@Param("facultyid") int facultyid);
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update faculty_info set password=:passwd where facultyid=:facultyid")
	public void updatePassword(@Param("passwd") String passwd,@Param("facultyid") int facultyid);
}

package com.equiz.repositories;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.equiz.entities.FacultyEntity;

@Repository
public interface FacultyRepo extends JpaRepository<FacultyEntity, Long>{

//	public List<FacultyEntity> findByUserName(String uname);
//	
//	
//	@Query(nativeQuery = true,value="select facultyid from faculty_info where username=:username")
//	public int findByUserName1(@Param("username") String username);
	
	@Query(nativeQuery = true,value="select * from faculty_info where username=:uname")
	public FacultyEntity findByUserName(@Param("uname") String uname);

	
}

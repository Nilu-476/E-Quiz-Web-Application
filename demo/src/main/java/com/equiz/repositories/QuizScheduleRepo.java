package com.equiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.equiz.entities.QuizScheduleEntity;

@Repository
public interface QuizScheduleRepo extends JpaRepository<QuizScheduleEntity, Integer>{
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set quiz_name=:quizname where quizid=:quizid")
	public void updateQuizName(@Param("quizname") String quizname,@Param("quizid") int quizid );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set quiz_desc=:quizdesc where quizid=:quizid")
	public void updateQuizDesc(@Param("quizdesc") String quizdesc,@Param("quizid") int quizid );
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set schedule_date=:scheduledate where quizid=:quizid")
	public void updateScheduleDate(@Param("scheduledate") String scheduledate,@Param("quizid") int quizid );

	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set schedule_time=:scheduletime where quizid=:quizid")
	public void updateScheduleTime(@Param("scheduletime") String scheduletime,@Param("quizid") int quizid );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set duration=:duration where quizid=:quizid")
	public void updateDuration(@Param("duration") int duration,@Param("quizid") int quizid );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update quiz_schedule set total_marks=:totalmarks where quizid=:quizid")
	public void updateTotalMarks(@Param("totalmarks") int totalmarks,@Param("quizid") int quizid );

}

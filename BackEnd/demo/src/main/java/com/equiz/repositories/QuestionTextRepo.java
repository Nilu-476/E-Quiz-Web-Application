package com.equiz.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.equiz.entities.QuestionTypeText;

@Repository
public interface QuestionTextRepo extends JpaRepository<QuestionTypeText,Integer>{

	@Modifying
	@Transactional
	@Query(nativeQuery=true,value="delete from text_question where quizid =:quiz_id ")
	public void deleteByQuizschedule(@Param("quiz_id")int quiz_id);
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set question_text=:qtext where question_id=:question_id")
	public void updateQuestionText(@Param("qtext") String qtext,@Param("question_id") int question_id );
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set option1=:op1 where question_id=:question_id")
	public void updateOption1(@Param("op1") String op1,@Param("question_id") int question_id );
	
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set option2=:op2 where question_id=:question_id")
	public void updateOption2(@Param("op2") String op2,@Param("question_id") int question_id );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set option3=:op3 where question_id=:question_id")
	public void updateOption3(@Param("op3") String op3,@Param("question_id") int question_id );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set option4=:op4 where question_id=:question_id")
	public void updateOption4(@Param("op4") String op4,@Param("question_id") int question_id );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set correct_answer=:correct_op where question_id=:question_id")
	public void updateCorrectAnswer(@Param("correct_op") String correct_op,@Param("question_id") int question_id );
	
	@Modifying
	@Transactional
	@Query( nativeQuery = true,value="update text_question set marks=:marks where question_id=:question_id")
	public void updateMarks(@Param("marks") int marks,@Param("question_id") int question_id );
	
	
	@Query(nativeQuery = true,value="Select * from text_question where quizid=:quizid")
	public List<QuestionTypeText> findByQuizschedule(@Param("quizid")int quizid);
	
	
	
	}

package com.equiz.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.equiz.entities.ResultEntity;

public interface ResultRepo extends JpaRepository<ResultEntity, Integer>
{
	public List<ResultEntity> findByQuizid(int quizid);
	
	public List<ResultEntity> findByPrnNo(long l);
	
	@Query( nativeQuery = true,value="select quiz_id from student_result where prn_no=:prn and quiz_id in (select quizid from quiz_schedule where schedule_date=:cur_date)")
	public List<Integer> findByPrnNo(@Param("prn") long prn,@Param("cur_date") String cur_date );
}

package com.equiz.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.equiz.entities.ResultEntity;

@Repository
public interface ResultRepository extends JpaRepository<ResultEntity, Integer>{
	
	

}

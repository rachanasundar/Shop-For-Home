package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.bean.Admin;
@Repository
public interface AdminDao extends JpaRepository<Admin, String> {
	
@Query("select a.email from Admin a")
	public List<String> getAllEmail();
}

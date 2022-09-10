package com.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bean.Admin;

public interface AdminDao extends JpaRepository<Admin, String> {
	
@Query("select a.email from Admin a")
	public List<String> getAllEmail();
}

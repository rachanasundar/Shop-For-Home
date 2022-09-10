package com.dao;

 

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import com.bean.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {
	@Query("select u.name from User u where u.email=:email")
	public String getUsername(@Param("email") String email);

}

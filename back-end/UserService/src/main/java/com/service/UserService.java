package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.User;
import com.dao.UserDao;

@Service
public class UserService {
	@Autowired
	UserDao userDao;
	
	
	 public String userRegistration(User user) {
		   if(userDao.existsById(user.getEmail())) {
			   return "your Details Already Present";
		   }else {
			   userDao.save(user);
			   return "Details Saved Sucessfully";
		   }	   
	   }
	   
	   public String logIn(User user) {
		   if(userDao.existsById(user.getEmail())) {
			   User u=userDao.getById(user.getEmail());
			   if(u.getPassword().equals(user.getPassword())) {
				   return "You Logged In Sucessfully";
			   }else {
				   return "Log In Failed. Wrong Password";
			   }				   
		   }else {
			   return "Your Details Are Not Present . Please Sign In";
		   }
		   
	   }
	   
	   public String getName(String email) {
		   if(userDao.existsById(email)) 
		     return userDao.getUsername(email);
		   else
			   return "User";
	   }

}

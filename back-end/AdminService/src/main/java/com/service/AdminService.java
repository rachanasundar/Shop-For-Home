package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Admin;
import com.dao.AdminDao;

@Service
public class AdminService {

	@Autowired
	AdminDao adminDao;
	
	public String signIn(Admin admin) {

		if (adminDao.existsById(admin.getEmail())) {
			return "Email with "+admin.getEmail()+" already exists. Please LOG IN";
		} else {
			adminDao.save(admin);
			return "Sign In Successful";
		}
	}

	public String logIn(Admin admin) {
		if(adminDao.count()>0) {
			if (!adminDao.existsById(admin.getEmail())) {
				return "Email with "+admin.getEmail()+" doesnot exists. Please SIGN IN";
			} else {
				Admin a = adminDao.getById(admin.getEmail());
				if (a.getPassword().equals(admin.getPassword())) {
					return "Log In Successful";
				} else {
					return "Log In Failed. Incorrect Password";
					
				}
			}
		}else {
			return "Email with "+admin.getEmail()+" doesnot exists. Please SIGN IN";
		}
	}
	
	public List<String> getAllAdminEmail(){
		return adminDao.getAllEmail();
	}

}

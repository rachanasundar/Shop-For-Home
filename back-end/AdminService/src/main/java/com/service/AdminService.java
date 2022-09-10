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
	
	public String adminRegistration(Admin admin) {

		if (adminDao.existsById(admin.getEmail())) {
			return "Admin id must be unique";
		} else {
			adminDao.save(admin);
			return "Sign In successfully";
		}
	}

	public String logIn(Admin admin) {
		if (!adminDao.existsById(admin.getEmail())) {
			return "Admin  details not present";
		} else {
			Admin a = adminDao.getById(admin.getEmail());
			if (a.getPassword().equals(admin.getPassword())) {
				return "Log In Successful";
			} else {
				return "Log In Failed. Wrong Password";
			}
		}
	}
	
	public List<String> getAllAdminEmail(){
		return adminDao.getAllEmail();
	}

}

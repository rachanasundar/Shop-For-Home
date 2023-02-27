package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Admin;
import com.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	AdminService adminService;

	@PostMapping(value = "adminSignIn", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String adminSignIn(@RequestBody Admin admin) {
		return adminService.signIn(admin);
	}

	
	@PostMapping(value = "adminLogIn", consumes = MediaType.APPLICATION_JSON_VALUE)
	public String adminLogIn(@RequestBody Admin admin) {
		return adminService.logIn(admin);
	}

	@GetMapping(value = "logout")
	public String adminLogout() {
		return "You logged out Sucessfully";
	}

}

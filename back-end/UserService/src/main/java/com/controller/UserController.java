package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.User;
import com.service.UserService;

@RestController
@RequestMapping(value="user")
@CrossOrigin
public class UserController {
	@Autowired
	UserService userService;
	@PostMapping(value="register",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String userRegister(@RequestBody User user) {
		return userService.userRegistration(user);
	}
	
	@PostMapping(value="login")
	public String userLogin(@RequestBody User user) {
		return userService.logIn(user);
		
	}
	
	@GetMapping(value = "logout")
	public String userLogout() {
		return "You logged out Sucessfully";
	}
	
	@GetMapping(value = "userName/{email}")
	public String userName(@PathVariable("email") String email) {
		return userService.getName(email);
	}

}

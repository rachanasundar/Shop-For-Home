package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.User;
import com.dao.UserDao;

@Service
public class UserService {
	@Autowired
	UserDao userDao;

	public String storeUser(User user) {
		if (userDao.existsById(user.getEmail())) {
			return "Failed to store user info. User email should be unique";
		} else {
			userDao.save(user);
			return "User stored succesfully.....";
		}
	}

	public List<User> getAllUser() {
		return userDao.findAll();

	}

	public String updateUsername(User user) {
		if (!userDao.existsById(user.getEmail())) {
			return "User " + user.getEmail() + " details not present";
		} else {
			User u = userDao.getById(user.getEmail());
			u.setName(user.getName());
			userDao.saveAndFlush(u);
			return "User " + user.getEmail() + " name updated successfully";
		}

	}

	public String updateUserPassword(User user) {
		if (!userDao.existsById(user.getEmail())) {
			return "User " + user.getEmail() + " details not present";
		} else {
			User u = userDao.getById(user.getEmail());
			u.setPassword(user.getPassword());
			userDao.saveAndFlush(u);
			return "User " + user.getEmail() + " password updated successfully";
		}

	}

	public String deleteUser(String email) {

		if (!userDao.existsById(email)) {
			return "User " + email + " details not present";
		} else {
			userDao.deleteById(email);
			return "User " + email + " deleted succesfully.....";
		}

	}

}

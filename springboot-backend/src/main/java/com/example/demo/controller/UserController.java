package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	// get all Users
	@GetMapping("/users")
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	// create new user
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@PostMapping("/login")
        public String login(@RequestBody Map<String, String> json ) {
		String username = json.get("username");
		String password = json.get("password");
		User u = userRepository.findByUsernameAndPassword(username, password);
		if (u == null) {
			return "fail";			
		} else {
			return username;
		}
	}
	
	@PostMapping("/register")
        public String register(@RequestBody Map<String, String> json ) {
		String username = json.get("username");
		String password = json.get("password");
		User u = userRepository.findByUsernameAndPassword(username, password);
		if (u == null) {
			return username;		
		} else {
			return "fail";
		}
	}
}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Answer;
import com.example.demo.repository.AnswerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AnswerController {
	
	@Autowired
	private AnswerRepository answerRepository;
	
	//get all Replies
	@GetMapping("/answers")
	public List<Answer> getAllAnswers(){
		return answerRepository.findAll();
	}
	
	//create new answer
	@PostMapping("/answers")
	public Answer createAnswer(@RequestBody Answer a) {
		return answerRepository.save(a);
	}
}

package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Question;
import com.example.demo.repository.QuestionRepository;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class QuestionController {
	@Autowired
	private QuestionRepository questionRepository;
	
	// getting all questions
	@GetMapping("/question")
	public List<Question> getAllQuestions (){
		return questionRepository.findAll();
	}
	
	// creating rest api for questions	
	@PostMapping("/question")
	public Question createQuestion(@RequestBody Question question) {
		return questionRepository.save(question);
	}
	
	// get question by id
	@PostMapping("/questions/{q_id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable Long q_id) {
		Question q = questionRepository.findById(q_id)
				.orElseThrow(
						() -> new ResourceNotFoundException("Not Found"));
		return ResponseEntity.ok(q);
	}
	
	
}

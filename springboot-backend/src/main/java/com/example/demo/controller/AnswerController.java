package soen341project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import soen341project.model.Answer;
import soen341project.repository.AnswerRepository;


@RestController
@RequestMapping("/api/v1/")
public class AnswerController {
	
	@Autowired
	private AnswerRepository answerRepository;
	
	//get all Replies
	@GetMapping("/answers")
	public List<Answer> getAllQuestions(){
		return answerRepository.findAll();
	}
}

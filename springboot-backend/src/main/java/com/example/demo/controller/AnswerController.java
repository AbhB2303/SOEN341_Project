package com.example.demo.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Answer;
import com.example.demo.model.Question;
import com.example.demo.repository.AnswerRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class AnswerController
{
	@Autowired
	private AnswerRepository answerRepository;
	
	//get all Replies
	@GetMapping("/answers")
	public List<Answer> getAllAnswers()
	{
		return answerRepository.findAll();
	}
	
	//create new answer
	@PostMapping("/answers")
	public Answer createAnswer(@RequestBody Answer a)
	{
		return answerRepository.save(a);
	}
	
	@PostMapping("/best")
	public void setBest(@RequestBody Map<String, String> json) {
		String questionId = json.get("qid");
		String replyId = json.get("rid");
		
		Long qid = Long.parseLong(questionId);
		Long rid = Long.parseLong(replyId);
		
		List<Answer> la = answerRepository.findByQuestionID(qid);
		for(int i=0; i<la.size(); i++) {
			if (la.get(i).getReplyID()==rid) {
				la.get(i).setBestAnswer(true);
				answerRepository.save(la.get(i));
			} else {
				la.get(i).setBestAnswer(false);
				answerRepository.save(la.get(i));
			}
		}
		
	}
}

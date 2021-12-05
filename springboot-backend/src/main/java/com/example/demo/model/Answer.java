package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="answers")
public class Answer 
{
	//Default constructor
	public Answer() {}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long replyID;
	
	@Column(name = "questionID")
	private long questionID; //Id of the question to which it's associated
	
	@Column(name = "username")
	private String username; // Username of the user who wrote the reply
	
	@Column(name = "body")
	private String body; //Text of the reply
	
	@Column(name = "isBestAnswer")
	private boolean isBestAnswer; //Whether it's the best answer
	
	@Column(name = "rating")
	private long rating; //Stores the rating of the answer
	
	//Constructor with parameters
	public Answer(long questionID, String username, String body, boolean isBestAnswer, long rating) 
	{
		super();
		this.questionID = 	questionID;
		this.username =		username;
		this.body = 		body;
		this.isBestAnswer = 	isBestAnswer;
		this.rating = 		rating;
	}
	
	//Getters and setters	
	public long getReplyID() 
	{
		return replyID;
	}

	public void setReplyID(long replyID) 
	{
		this.replyID = replyID;
	}

	public long getQuestionID() 
	{
		return questionID;
	}

	public void setQuestionID(long questionID) 
	{
		this.questionID = questionID;
	}

	public String getUsername() 
	{
		return username;
	}

	public void setUsername(String username) 
	{
		this.username = username;
	}

	public String getBody() 
	{
		return body;
	}

	public void setBody(String body) 
	{
		this.body = body;
	}

	public boolean isBestAnswer() 
	{
		return isBestAnswer;
	}

	public void setBestAnswer(boolean isBestAnswer) 
	{
		this.isBestAnswer = isBestAnswer;
	}

	public long getRating() 
	{
		return rating;
	}

	public void setRating(long rating) 
	{
		this.rating = rating;
	}	
}

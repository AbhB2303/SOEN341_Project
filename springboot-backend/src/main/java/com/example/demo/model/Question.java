package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "question")
public class Question 
{
	// variables
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long q_id;
	
	@Column(name = "q_title")
	private String q_title;
	
	@Column(name = "q_text")
	private String q_text;
	
	@Column(name = "username")
	private String username;
	
	// constructors
	public Question(String q_title, String q_text, String username)
	{
		super();
		this.q_title = q_title;
		this.q_text = q_text;
		if(username.length() == 0) 
			this.username = "anonymous";
		else
			this.username = username;
	}
	
	public Question () {}
	
	// setters and getters
	public long getId() 
	{
		return q_id;
	}
	
	public void setId(long q_id) 
	{
		this.q_id = q_id;
	}
	
	public String getQ_title() 
	{
		return q_title;
	}
	
	public void setQ_title(String q_title) 
	{
		this.q_title = q_title;
	}
	
	public String getQ_text() 
	{
		return q_text;
	}
	
	public void setQ_text(String q_text) 
	{
		this.q_text = q_text;
	}
	
	public String getUsername() 
	{
		return username;
	}
	
	public void setUsername(String username)
	{
		this.username = username;
	}
}

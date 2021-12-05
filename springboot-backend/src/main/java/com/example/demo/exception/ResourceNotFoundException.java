package com.example.demo.exception;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException
{
	private static final long sVUId = 1L;
	
	public ResourceNotFoundException (String msg)
	{
		super(msg);
	}	
}

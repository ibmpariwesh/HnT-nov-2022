package com.reddit;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class AccountServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountServiceApplication.class, args);;
	}
}

@RefreshScope
@RestController
class MessageRestController {

	@Value("${message:Hello world - Config Server is not working..Please check configuration }")
	private String message;

	@RequestMapping("/getMessage")
	String getMessage() {
//		if(1==1)
//			throw new IllegalArgumentException();
		return this.message;
	}
	
	@PostMapping("/account")
	public void createAccount(@Valid @RequestBody Account account) {
		System.out.println(account);
	}
}

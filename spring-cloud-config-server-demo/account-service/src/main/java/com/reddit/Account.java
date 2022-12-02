package com.reddit;

import javax.validation.constraints.NotBlank;

public class Account {
	Integer number;
	@NotBlank(message = "owner name is required")
	String owner;
	
	public Integer getNumber() {
		return number;
	}
	public void setNumber(Integer number) {
		this.number = number;
	}
	public String getOwner() {
		return owner;
	}
	public void setOwner(String owner) {
		this.owner = owner;
	}
}

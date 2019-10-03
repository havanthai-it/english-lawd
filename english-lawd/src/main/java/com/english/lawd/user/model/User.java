package com.english.lawd.user.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "user")
public class User {
	
	@Id
	@Field("_id")
	String id;
	
	@Field("username")
	String username;
	
	@Field("password")
	String password;

	@Field("salt")
	String salt;
	
	@Field("birthday")
	Date birthday;
	
	@Field("email")
	String email;
	
}

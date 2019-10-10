package com.english.lawd.user.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid")
	@NotNull
	String id;

	@Column(unique = true)
	@NotNull
	String email;

	@NotNull
	String username;

	@NotNull
	String password;

	@NotNull
	String salt;

	String gender;

	Date birthday;

	String country;

	String address;

	String phone;

}

package com.english.lawd.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Date;
import java.sql.Timestamp;

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

	String avatar;

	String token;

	@Column(name = "last_login")
	Timestamp lastLogin;

	String type;	// [basic, standard, premium]

}

package com.english.lawd.user.service.impl;

import com.english.lawd.user.model.User;
import com.english.lawd.user.repository.UserRepository;
import com.english.lawd.user.service.UserService;
import com.english.lawd.util.ErrorUtils;
import com.english.lawd.util.PropUtils;
import com.english.lawd.util.function.JwtTokenUtil;
import com.english.lawd.util.function.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Timestamp;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private Environment env;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User signIn(String email, String password) {
		User user = userRepository.findByEmail(email);
		if (user != null) {
			String hashedPassword = UserUtil.hashPassword(password, user.getSalt());
			if (hashedPassword.equals(user.getPassword())) {
				// Generate token
				String token = JwtTokenUtil.generateToken(user.getId());

				// Save login information to database
				user.setToken(token);
				user.setLastLogin(new Timestamp(System.currentTimeMillis()));

				// Save login information to database, return user
				return userRepository.save(user);
			}
		}
		return null;
	}

	@Override
	public User signUp(User user) {
		// Check if email exist
		User existEmail = userRepository.findByEmail(user.getEmail());
		if (existEmail != null) {
			throw ErrorUtils.EMAIL_EXISTS;
		}

		// Generate salt, hash password
		Integer saltLength = env.getProperty("lawd.constant.salt-length", Integer.class);
		user.setSalt(UserUtil.generateSalt(saltLength == null ? 8 : saltLength));
		user.setPassword(UserUtil.hashPassword(user.getPassword(), user.getSalt()));

		// Set default attributes
		user.setId(null);
		user.setType(PropUtils.USER_TYPE_BASIC);

		// Save to database
		return userRepository.save(user);
	}

}

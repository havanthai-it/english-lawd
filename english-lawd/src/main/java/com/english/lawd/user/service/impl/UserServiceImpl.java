package com.english.lawd.user.service.impl;

import com.english.lawd.user.model.User;
import com.english.lawd.user.repository.UserRepository;
import com.english.lawd.user.service.UserService;
import com.english.lawd.util.ErrorUtil;
import com.english.lawd.util.function.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private Environment env;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User signIn(String username, String password) {
		User user = userRepository.findByUsername(username);
		if (user != null) {
			String hashedPassword = UserUtil.hashPassword(password, user.getSalt());
			if (hashedPassword.equals(user.getPassword())) {
				return user;
			}
		}
		return null;
	}

	@Override
	public User signUp(User user) {
		// CHECK IF USERNAME EXISTS
		User existUsername = userRepository.findByUsername(user.getUsername());
		if (existUsername != null) {
			throw ErrorUtil.USERNAME_EXISTS;
		}

		// CHECK IF EMAIL EXISTS
		User existEmail = userRepository.findByEmail(user.getEmail());
		if (existEmail != null) {
			throw ErrorUtil.EMAIL_EXISTS;
		}

		// GENERATE SALT, HASHING PASSWORD
		Integer saltLength = env.getProperty("lawd.constant.salt-length", Integer.class);
		user.setSalt(UserUtil.generateSalt(saltLength == null ? 8 : saltLength));
		user.setPassword(UserUtil.hashPassword(user.getPassword(), user.getSalt()));

		return userRepository.save(user);
	}

}

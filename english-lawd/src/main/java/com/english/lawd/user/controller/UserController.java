package com.english.lawd.user.controller;

import com.english.lawd.user.dto.UserDto;
import com.english.lawd.user.model.User;
import com.english.lawd.user.service.UserService;
import com.english.lawd.util.ErrorUtils;
import com.english.lawd.util.function.ModelMapperUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("")
	public UserDto signIn(String username, String password) {
		User response = userService.signIn(username, password);
		if (response == null) {
			throw ErrorUtils.INCORRECT_USERNAME_PASSWORD;
		}
		return ModelMapperUtil.map(response, UserDto.class);
	}

	@PostMapping("")
	public UserDto signUp(@RequestBody User user) {
		if (user == null
				|| (user.getUsername() == null || user.getUsername().trim().isEmpty())
				|| (user.getPassword() == null || user.getPassword().trim().isEmpty())
				|| (user.getEmail() == null) || user.getEmail().trim().isEmpty()) {
			throw ErrorUtils.BAD_REQUEST;
		}
		user.setId(null);

		User response = userService.signUp(user);
		return ModelMapperUtil.map(response, UserDto.class);
	}
	
}

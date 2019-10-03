package com.english.lawd.user.service;

import com.english.lawd.user.model.User;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;


@Service
public interface UserService {
	User signIn(String username, String password);
	User signUp(User user);
}

package com.english.lawd.util;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ErrorUtil {
    // --- COMMON ERROR ---
    public static final ResponseStatusException INTERNAL_SERVER_ERROR = new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error");
    public static final ResponseStatusException BAD_REQUEST = new ResponseStatusException(HttpStatus.BAD_REQUEST, "Bad request");

    // --- USER ERROR ---
    public static final ResponseStatusException INCORRECT_USERNAME_PASSWORD = new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Username or password is incorrect");
    public static final ResponseStatusException USERNAME_EXISTS = new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Username is already exists");
    public static final ResponseStatusException EMAIL_EXISTS = new ResponseStatusException(HttpStatus.NOT_ACCEPTABLE, "Email is already exists");
}

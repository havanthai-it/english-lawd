package com.english.lawd.user.dto;

import lombok.Data;

import java.util.Date;

@Data
public class UserDto {
    String id;
    String username;
    Date birthday;
    String email;
}

package com.english.lawd.user.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.sql.Timestamp;
import java.sql.Date;

@Data
public class UserDto {
    String id;
    String email;
    String username;
    Date birthday;
    String gender;
    String country;
    String address;
    String phone;
    String token;
    String avatar;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    Timestamp lastLogin;
    String type;
}

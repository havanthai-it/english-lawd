package com.english.lawd.user.repository.impl;

import com.english.lawd.user.model.User;
import com.english.lawd.user.repository.UserRepositoryCustom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


@Repository
public class UserRepositoryCustomImpl implements UserRepositoryCustom {
	
	@Autowired
	private MongoTemplate mongoTemplate;

}

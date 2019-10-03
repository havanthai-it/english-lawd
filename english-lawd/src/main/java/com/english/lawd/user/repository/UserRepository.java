package com.english.lawd.user.repository;

import com.english.lawd.user.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends MongoRepository<User, String>, UserRepositoryCustom {
	@Query("{ 'username' : ?0 }")
	User findByUsername(String username);

	@Query("{ 'email' : ?0 }")
	User findByEmail(String email);
}

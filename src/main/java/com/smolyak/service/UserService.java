package com.smolyak.service;

import com.smolyak.entity.UserEntity;

public interface UserService {

	void saveUser(UserEntity entity);
	
	UserEntity findUserById(int id);
	
	UserEntity findUserByEmail(String email);
}

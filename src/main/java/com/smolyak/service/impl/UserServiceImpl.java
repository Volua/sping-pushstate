package com.smolyak.service.impl;

import org.springframework.stereotype.Service;

import com.smolyak.entity.UserEntity;
import com.smolyak.service.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Override
	public void saveUser(UserEntity entity) {

	}

	@Override
	public UserEntity findUserById(int id) {
		return null;
	}

	@Override
	public UserEntity findUserByEmail(String email) {
		return null;
	}

}

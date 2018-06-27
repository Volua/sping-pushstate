package com.smolyak.mapper;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import com.smolyak.entity.UserEntity;

public interface UserMapper {

	public static User toSecurityUser(UserEntity entity) {
		return new User(entity.getEmail(), entity.getPassword(),
				AuthorityUtils.createAuthorityList(String.valueOf(entity.getRole())));
	}

}

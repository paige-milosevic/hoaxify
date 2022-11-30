package com.hoaxify.hoaxify.user;

import org.springframework.stereotype.Service;

@Service
public class UserService {

	
	UserRepo userRepo;

	public UserService(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
	}
	
	public User save(User user) {
		return userRepo.save(user);
	}
	
	
}

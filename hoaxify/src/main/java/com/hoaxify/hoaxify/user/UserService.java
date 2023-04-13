package com.hoaxify.hoaxify.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	
	UserRepo userRepo;
	BCryptPasswordEncoder passwordEncoder;

	public UserService(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}
	
	public User save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepo.save(user);
	}
	
	
}

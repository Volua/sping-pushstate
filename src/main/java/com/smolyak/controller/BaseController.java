package com.smolyak.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smolyak.domain.LoginRequest;
import com.smolyak.service.UserService;

@Controller
public class BaseController {

	@Autowired
	private UserService userService;

	@GetMapping({ "/", "/home" })
	public String showHome() {
		return "test";
	}
	//
	// @GetMapping({"/", "/home"})
	// public String shoHome(Model model) {
	// Gson gs = new Gson();
	//
	// String text="bye from base controller";
	// String json = gs.toJson(text);
	// model.addAttribute("text",json);
	// return "test";
	// }
	//
	// @GetMapping({"/", "/home"})
	// public String shoHome() {
	// Gson gs = new Gson();
	//
	// String text="hura from base controller";
	// String json = gs.toJson(text);
	//
	// return json;
	// }

	@GetMapping("/login")
	public String showLogin(Model model) {
		model.addAttribute("loginModel", new LoginRequest());
		return "login";
	}

}

package com.smolyak.controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.google.gson.Gson;
import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.BookState;
import com.smolyak.service.BookService;
import com.smolyak.service.CategoryService;

@Controller
public class BookController {
	@Autowired
	private BookService bookService;
	@Autowired
	private CategoryService categoryService;
	Gson gson = new Gson();
	List<BookEntity> bookList = new ArrayList<>();
	List<BookCategory> list = new ArrayList<>();
	
	
	@RequestMapping(value = { "/featured", "/topcharts", "/purchased", "/categories" }, method = RequestMethod.GET)
	public ModelAndView helloAjaxTest() {
		return new ModelAndView("test");
	}

	@RequestMapping(value = { "/ajax" }, params = "pageId", method = RequestMethod.GET)
	@ResponseBody
	public String getBooksByState(String pageId) {
		if (pageId.equals("categories")) {
			return categoryService.getCategories();
		}
		bookList = bookService.findBookByState(BookState.valueOf(pageId.toUpperCase()));
		return gson.toJson(bookList);
	}

}

package com.smolyak.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.EnumCategoryFactory;
import com.smolyak.repository.BookRepository;
import com.smolyak.service.CategoryService;
@Service
public class CategoryServiceImpl implements CategoryService {
	
	private BookCategory category;
	@Autowired
	BookRepository bookRep;
	private List<BookCategory>list = new ArrayList<>();

	@Override
	public String getCategories() {
		list.clear();
		list.add(BookCategory.EDUCATION);
		list.add(BookCategory.ENTERTAINMENT);
		GsonBuilder builder = new GsonBuilder();
		builder.registerTypeAdapterFactory(new EnumCategoryFactory());
		Gson gson = builder.create();
		return gson.toJson(list);
	}

	@Override
	public List<BookEntity> getBooksByCategory(BookCategory category) {
		System.out.println("In category service ");
		System.out.println(category);
		// TODO Auto-generated method stub
		return bookRep.findBookByCategory(category);
	}
	
	
	
	

	

}

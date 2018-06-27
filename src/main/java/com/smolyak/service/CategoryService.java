package com.smolyak.service;
import java.util.List;

import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.*;

public interface CategoryService {
	
	String getCategories();
	List<BookEntity>getBooksByCategory(BookCategory category);
	
	

}

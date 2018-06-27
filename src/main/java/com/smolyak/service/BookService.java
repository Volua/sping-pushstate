package com.smolyak.service;

import java.util.List;

import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.BookState;

public interface BookService {
	void saveBook(BookEntity entity);
	BookEntity findBookByTitle(String bookTitle);
	List<BookEntity> findBookByCategory(BookCategory bookCategory);
	List<BookEntity> findBookByState(BookState bookState);

}

package com.smolyak.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.BookState;
import com.smolyak.repository.BookRepository;
import com.smolyak.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	@Autowired
	BookRepository bookRepository;

	@Override
	public void saveBook(BookEntity entity) {
		// TODO Auto-generated method stub

	}

	@Override
	public BookEntity findBookByTitle(String bookTitle) {
		// TODO Auto-generated method stub
		return bookRepository.findBookByTitle(bookTitle);
	}

	@Override
	public List<BookEntity> findBookByCategory(BookCategory bookCategory) {
		// TODO Auto-generated method stub
		
		
		return bookRepository.findBookByCategory(bookCategory);

	}

	@Override
	public List<BookEntity> findBookByState(BookState bookState) {
		// TODO Auto-generated method stub
		return bookRepository.findBookByState(bookState);
	}

}

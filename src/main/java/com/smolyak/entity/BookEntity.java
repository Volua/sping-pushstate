package com.smolyak.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.BookState;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class BookEntity extends BaseEntity{
	@Column(name = "book_title")
	private String bookTitle;
	@Column(name = "book_category")
	@Enumerated(EnumType.STRING)
	private BookCategory bookCategory;
	@Enumerated(EnumType.STRING)
	private BookState bookState;
	@Column(name = "description")
	private String bookDescr; 
	@Column(name = "book_image")
	private String bookImage;
	private String Author;

}

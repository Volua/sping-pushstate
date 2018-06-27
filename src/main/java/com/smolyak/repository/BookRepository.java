package com.smolyak.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.smolyak.entity.BookEntity;
import com.smolyak.entity.enumeration.BookCategory;
import com.smolyak.entity.enumeration.BookState;
@Repository
public interface BookRepository extends JpaRepository<BookEntity, Integer> {
	@Query("SELECT u FROM BookEntity u WHERE u.bookTitle = :bookTitle")
	BookEntity findBookByTitle(@Param("bookTitle") String bookTitle);
	
	@Query("SELECT u FROM BookEntity u WHERE u.bookCategory = :bookCategory")
	List<BookEntity> findBookByCategory(@Param("bookCategory") BookCategory bookCategory);
	
	@Query("SELECT u FROM BookEntity u WHERE u.bookState = :bookState")
	List<BookEntity> findBookByState(@Param("bookState") BookState bookState);

//	@Query("SELECT b FROM BookEntity WHERE b.bookCategory = :bookCategory")
//	BookEntity findBookByCategory(@Param("bookCategory") String bookCategory);
}

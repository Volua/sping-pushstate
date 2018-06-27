package com.smolyak.entity.enumeration;

import lombok.Getter;
import lombok.Setter;

public enum BookCategory {
	EDUCATION("Education", "/resources/assets/categories/education2.png"), ENTERTAINMENT("Entertainment", "/resources/assets/categories/entertainment3.png");

	private String category;
	@Getter
	@Setter
	private String bookImage;

	BookCategory(String category, String bookImage) {
		this.category = category;
		this.bookImage = bookImage;
		
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
	
	
}

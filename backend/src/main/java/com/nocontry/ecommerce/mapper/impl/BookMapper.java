package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IBookMapper;
import com.nocontry.ecommerce.persistence.model.Book;
import com.nocontry.ecommerce.rest.dto.response.BookResponse;

public class BookMapper implements IBookMapper {
    @Override
    public BookResponse toBookResponse(Book book) {
        return BookResponse.builder()
                .id(book.getArticleId())
                .title(book.getTitle())
                .price(book.getPrice())
                .description(book.getDescription())
                .stock(book.getStock())
                .image(book.getImage())
                .autorName(book.getAutorName())
                .releaseDate(book.getReleaseDate())
                .build();
    }
}

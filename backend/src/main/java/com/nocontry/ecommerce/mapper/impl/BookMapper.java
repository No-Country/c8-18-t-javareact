
package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IBookMapper;
import com.nocontry.ecommerce.persistence.model.Book;
import com.nocontry.ecommerce.rest.dto.response.BookResponse;
import org.springframework.stereotype.Service;

@Service
public class BookMapper implements IBookMapper {

    @Override
    public BookResponse toBookResponse(Book book) {
        return BookResponse.builder()
                .autorName(book.getAutorName())
                .releaseDate(book.getReleaseDate())
                .build();
    }
}

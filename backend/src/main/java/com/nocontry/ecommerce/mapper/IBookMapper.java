package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.Book;
import com.nocontry.ecommerce.rest.dto.response.BookResponse;

public interface IBookMapper {

    BookResponse toBookResponse(Book book);
}

package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.rest.dto.response.BookResponse;

import java.util.List;

public interface IBookService {

    List<BookResponse> getAllBooks();
}

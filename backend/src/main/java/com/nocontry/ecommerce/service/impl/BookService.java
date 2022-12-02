package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IBookMapper;
import com.nocontry.ecommerce.persistence.model.Book;
import com.nocontry.ecommerce.persistence.repository.BookRepository;
import com.nocontry.ecommerce.rest.dto.response.BookResponse;
import com.nocontry.ecommerce.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService implements IBookService {

    @Autowired
    private IBookMapper bookMapper;

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<BookResponse> getAllBooks() {

        List<BookResponse> bookResponses = new ArrayList<>();

        List<Book> books = bookRepository.findAll();

        books.forEach(book -> bookResponses.add(bookMapper.toBookResponse(book)));

        return bookResponses;
    }
}

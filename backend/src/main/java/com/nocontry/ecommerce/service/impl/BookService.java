package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IBookMapper;
import com.nocontry.ecommerce.persistence.model.Book;
import com.nocontry.ecommerce.persistence.repository.BookRepository;
import com.nocontry.ecommerce.rest.dto.response.BookResponse;
import com.nocontry.ecommerce.service.IBookService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {

    @Autowired
    private IBookMapper bookMapper;
    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<BookResponse> getAllBook() {

        List<BookResponse> bookResp = new ArrayList();
        List<Book> books = bookRepository.findAll();
        books.forEach(book -> bookResp.add(bookMapper.toBookResponse(book)));
        return bookResp;
    }

}

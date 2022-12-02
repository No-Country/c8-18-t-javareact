package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.BookResponse;
import com.nocontry.ecommerce.service.IBookService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    private IBookService bookService;

    public ResponseEntity<List<BookResponse>> getAllBooks(){
        return ResponseEntity.ok(bookService.getAllBooks());
    }
}

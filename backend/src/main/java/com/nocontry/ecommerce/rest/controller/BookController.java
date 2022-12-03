
package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.BookResponse;
import com.nocontry.ecommerce.service.IBookService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
    
    @Autowired
    private IBookService bookService;
    
    @GetMapping("/books")
    public ResponseEntity <List<BookResponse>> getAllBooks(){
        return ResponseEntity.ok(bookService.getAllBook());
    }
    
}

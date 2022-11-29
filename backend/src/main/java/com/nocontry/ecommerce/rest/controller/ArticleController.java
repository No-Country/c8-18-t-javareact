package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.ArticleResponse;
import com.nocontry.ecommerce.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    private IArticleService articleService;

    @CrossOrigin
    @GetMapping("/articles")
    public ResponseEntity<List<ArticleResponse>> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }
}

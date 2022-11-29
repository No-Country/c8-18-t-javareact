package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IArticleMapper;
import com.nocontry.ecommerce.persistence.model.Article;
import com.nocontry.ecommerce.persistence.repository.ArticleRepository;
import com.nocontry.ecommerce.rest.dto.response.ArticleResponse;
import com.nocontry.ecommerce.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleService implements IArticleService {

    @Autowired
    private IArticleMapper articleMapper;
    @Autowired
    private ArticleRepository articleRepository;


    @Override
    public List<ArticleResponse> getAllArticles() {
        List<ArticleResponse> articleResponses = new ArrayList<>();
        List<Article> articles = articleRepository.findAll();
        articles.forEach(article -> articleResponses.add(articleMapper.toArticleResponse(article)));
        return articleResponses;
    }

}

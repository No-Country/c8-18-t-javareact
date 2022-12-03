package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.rest.dto.response.ArticleResponse;

import java.util.List;

public interface IArticleService {

    List<ArticleResponse> getAllArticles();
}

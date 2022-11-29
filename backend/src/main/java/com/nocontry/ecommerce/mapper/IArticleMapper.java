package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.Article;
import com.nocontry.ecommerce.rest.dto.response.ArticleResponse;

public interface IArticleMapper {

    ArticleResponse toArticleResponse(Article article);
}

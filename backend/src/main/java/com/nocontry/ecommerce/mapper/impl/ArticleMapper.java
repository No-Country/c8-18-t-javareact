package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IArticleMapper;
import com.nocontry.ecommerce.persistence.model.Article;
import com.nocontry.ecommerce.rest.dto.response.ArticleResponse;
import org.springframework.stereotype.Service;

@Service
public class ArticleMapper implements IArticleMapper {

        @Override
        public ArticleResponse toArticleResponse(Article article) {
            return ArticleResponse.builder()
                    .id(article.getArticleId())
                    .title(article.getTitle())
                    .price(article.getPrice())
                    .stock(article.getStock())
                    .image(article.getImage())
                    .build();
        }
}

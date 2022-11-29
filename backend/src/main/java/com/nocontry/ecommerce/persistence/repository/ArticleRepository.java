package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}

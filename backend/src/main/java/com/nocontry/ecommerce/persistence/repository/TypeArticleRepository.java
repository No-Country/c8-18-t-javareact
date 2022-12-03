package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.TypeArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeArticleRepository extends JpaRepository<TypeArticle, Long> {
}

package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.TypeArticle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeArticleRepository extends JpaRepository<TypeArticle, String> {

    @Query("SELECT t FROM typeArticle t WHERE t.description = :description")
    public TypeArticle findByDescription(@Param(value = "description") String description);

}

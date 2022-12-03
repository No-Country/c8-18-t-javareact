package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.TypeArticle;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeArticleRepository extends JpaRepository<TypeArticle, String> {

    @Query("SELECT t FROM typeArticle t WHERE t.description = :description")
    public TypeArticle findByDescription(@Param(value = "description") String description);

}
=======
import org.springframework.stereotype.Repository;

@Repository
public interface TypeArticleRepository extends JpaRepository<TypeArticle, Long> {
}
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c

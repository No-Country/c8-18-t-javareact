package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}

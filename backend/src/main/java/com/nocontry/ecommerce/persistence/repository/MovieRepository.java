package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}

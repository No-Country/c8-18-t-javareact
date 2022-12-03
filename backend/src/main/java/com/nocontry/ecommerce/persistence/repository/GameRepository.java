package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
}

package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Genere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenereRepository extends JpaRepository<Genere, Long> {

}


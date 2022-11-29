package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Genere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface GenereRepository extends JpaRepository<Genere, Long> {

    @Query("SELECT g FROM genere g WHERE g.name LIKE %:nombre%")
    public Genere findByName(@Param(value = "name") String name);
}

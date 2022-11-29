package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Disk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiskRepository extends JpaRepository<Disk, Long> {
}

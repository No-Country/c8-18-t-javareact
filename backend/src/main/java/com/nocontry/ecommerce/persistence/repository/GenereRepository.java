package com.nocontry.ecommerce.persistence.repository;

import com.nocontry.ecommerce.persistence.model.Genere;
import org.springframework.data.jpa.repository.JpaRepository;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
=======
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c
import org.springframework.stereotype.Repository;

@Repository
public interface GenereRepository extends JpaRepository<Genere, Long> {
<<<<<<< HEAD

    @Query("SELECT g FROM genere g WHERE g.name LIKE %:nombre%")
    public Genere findByName(@Param(value = "name") String name);
}
=======
}
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c

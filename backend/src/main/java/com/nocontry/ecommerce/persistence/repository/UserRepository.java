package com.nocontry.ecommerce.persistence.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nocontry.ecommerce.persistence.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM UsuarioEntidad u WHERE u.email LIKE %:email%")
    public User findByEmail(@Param(value = "email") String email);

    /**
    User findByEmail(String email);*/

}

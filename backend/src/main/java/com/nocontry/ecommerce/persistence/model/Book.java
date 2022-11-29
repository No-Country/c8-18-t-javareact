package com.nocontry.ecommerce.persistence.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "books")
public class Book extends Article{

    @Column(name = "autorName", nullable = false)
    private String autorName;

    @Column(name = "releaseDate", nullable = false)
    private Integer releaseDate;

}

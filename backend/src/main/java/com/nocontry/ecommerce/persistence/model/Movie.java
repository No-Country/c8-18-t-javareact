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
@Table(name = "movies")
public class Movie extends Article {

    @Column(name = "director", nullable = false)
    private String director;
}

package com.nocontry.ecommerce.persistence.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "games")
public class Game extends Article{

    @Column(name = "players", nullable = false)
    private String players;

    @Column(name = "releaseDate", nullable = false)
    private Integer releaseDate;

    @Column(name = "developer", nullable = false)
    private String developer;
}

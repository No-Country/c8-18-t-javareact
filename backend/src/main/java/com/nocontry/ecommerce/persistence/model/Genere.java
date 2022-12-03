package com.nocontry.ecommerce.persistence.model;

<<<<<<< HEAD
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
=======
import lombok.Setter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Builder;

import javax.persistence.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "generes")
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c
public class Genere {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "genre_id")
    private Long id;

    @Column
    private String name;
    
    /***@OneToOne
    private Article genero;*/

=======
    @Column(name = "genere_id")
    private Long genereId;

    @Column(name = "description", nullable = false)
    private String description;
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c
}

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
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "type_article")
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c
public class TypeArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
<<<<<<< HEAD
    @Column(name = "type_id")
    private String type;

    @Column
    private String description;

    private Boolean softDelete;

    /**
    @OneToOne
    private Image image;*/


=======
    @Column(name = "type_article_id")
    private Long typeArticleId;

    @Column(name = "description", length = 50 , nullable = false)
    private String description;

    @Column(name ="image")
    private String image;

    @Column(name = "soft_delete", nullable = false)
    private Boolean softDelete;
>>>>>>> 0ecae02a2b56015f058920d9dbba9ec172d22e5c
}

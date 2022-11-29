package com.nocontry.ecommerce.persistence.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "article_id", nullable = false)
    private Long articleId;

    @Column(name = "user_id", nullable = false)
    private String title;

    @Column(name = "price", nullable = false)
    private Float price;

    @ManyToOne
    @Column(name = "typeArticle_id", nullable = false)
    private TypeArticle typeArticleId;

    @ManyToMany
    @Column(name = "generes", nullable = false)
    private Genere generes;

    @Column(name = "stock")
    private Integer stock;

    @Column(name = "image", nullable = false)
    private String image;

}

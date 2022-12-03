package com.nocontry.ecommerce.persistence.model;

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
public class TypeArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(name = "type_article_id")
    private Long typeArticleId;

    @Column(name = "description", length = 50 , nullable = false)
    private String description;

    @Column(name ="image")
    private String image;

    @Column(name = "soft_delete", nullable = false)
    private Boolean softDelete;


}

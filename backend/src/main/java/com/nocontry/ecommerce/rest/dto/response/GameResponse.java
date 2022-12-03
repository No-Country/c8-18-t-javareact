package com.nocontry.ecommerce.rest.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GameResponse {

    private Long id;
    private String title;
    private Float price;
    private String description;
    private Integer stock;
    private String image;
    private String players;
    private Integer releaseDate;
    private String developer;

}

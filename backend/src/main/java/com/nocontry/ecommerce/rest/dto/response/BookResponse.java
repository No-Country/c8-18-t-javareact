
package com.nocontry.ecommerce.rest.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookResponse{
    
    private Long id;
    private String title;
    private Float price;
    private String description;
    private Integer stock;
    private String image;
    private String autorName;
    private Integer releaseDate;  
}

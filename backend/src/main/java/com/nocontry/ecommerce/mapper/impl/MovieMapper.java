package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IMovieMapper;
import com.nocontry.ecommerce.persistence.model.Movie;
import com.nocontry.ecommerce.rest.dto.response.MovieResponse;

public class MovieMapper implements IMovieMapper {

    @Override
    public MovieResponse toMovieResponse(Movie movie) {

        return MovieResponse.builder()
                .id(movie.getArticleId())
                .title(movie.getTitle())
                .price(movie.getPrice())
                .description(movie.getDescription())
                .stock(movie.getStock())
                .image(movie.getImage())
                .director(movie.getDirector())
                .build();
    }
}

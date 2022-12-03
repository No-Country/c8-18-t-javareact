package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.Movie;
import com.nocontry.ecommerce.rest.dto.response.MovieResponse;

public interface IMovieMapper {

    MovieResponse toMovieResponse(Movie movie);

}

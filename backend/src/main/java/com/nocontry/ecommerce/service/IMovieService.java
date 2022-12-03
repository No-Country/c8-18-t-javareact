package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.rest.dto.response.MovieResponse;

import java.util.List;

public interface IMovieService {

    List<MovieResponse> getAllMovies();

}

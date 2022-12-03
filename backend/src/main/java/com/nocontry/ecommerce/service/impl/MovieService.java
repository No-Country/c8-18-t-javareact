package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IMovieMapper;
import com.nocontry.ecommerce.persistence.model.Movie;
import com.nocontry.ecommerce.persistence.repository.MovieRepository;
import com.nocontry.ecommerce.rest.dto.response.MovieResponse;
import com.nocontry.ecommerce.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MovieService implements IMovieService {
    @Autowired
    private IMovieMapper movieMapper;

    @Autowired
    private MovieRepository movieRepository;

    @Override
    public List<MovieResponse> getAllMovies() {

        List<MovieResponse> movieResponses = new ArrayList<>();

        List<Movie> movies = movieRepository.findAll();

        movies.forEach(movie -> movieResponses.add(movieMapper.toMovieResponse(movie)));

        return movieResponses;
    }
}

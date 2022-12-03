package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.MovieResponse;
import com.nocontry.ecommerce.service.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private IMovieService movieService;

    @GetMapping("/movies")
    public ResponseEntity<List<MovieResponse>> getAllMovies(){
        return ResponseEntity.ok(movieService.getAllMovies());
    }
}

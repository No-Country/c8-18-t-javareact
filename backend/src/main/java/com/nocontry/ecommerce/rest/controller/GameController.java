package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.GameResponse;
import com.nocontry.ecommerce.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GameController {

    @Autowired
    private IGameService gameService;

    @GetMapping("/games")
    public ResponseEntity<List<GameResponse>> getAllGames(){
        return ResponseEntity.ok(gameService.getAllGames());
    }
}

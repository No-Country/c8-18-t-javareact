package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IGameMapper;
import com.nocontry.ecommerce.persistence.model.Game;
import com.nocontry.ecommerce.persistence.repository.GameRepository;
import com.nocontry.ecommerce.rest.dto.response.GameResponse;
import com.nocontry.ecommerce.service.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameService implements IGameService {

    @Autowired
    private IGameMapper gameMapper;

    @Autowired
    private GameRepository gameRepository;

    @Override
    public List<GameResponse> getAllGames() {

        List<GameResponse> gameResponses = new ArrayList<>();

        List<Game> games = gameRepository.findAll();

        games.forEach(game -> gameResponses.add(gameMapper.toGameResponse(game)));

        return gameResponses;
    }
}

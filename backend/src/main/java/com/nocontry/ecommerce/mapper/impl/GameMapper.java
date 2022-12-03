package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IGameMapper;
import com.nocontry.ecommerce.persistence.model.Game;
import com.nocontry.ecommerce.rest.dto.response.GameResponse;

public class GameMapper implements IGameMapper {

    @Override
    public GameResponse toGameResponse(Game game) {
        return GameResponse.builder()
                .id(game.getArticleId())
                .title(game.getTitle())
                .price(game.getPrice())
                .description(game.getDescription())
                .stock(game.getStock())
                .image(game.getImage())
                .players(game.getPlayers())
                .releaseDate(game.getReleaseDate())
                .developer(game.getDeveloper())
                .build();
    }
}

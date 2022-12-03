package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.Game;
import com.nocontry.ecommerce.rest.dto.response.GameResponse;

public interface IGameMapper {

    GameResponse toGameResponse(Game game);
}

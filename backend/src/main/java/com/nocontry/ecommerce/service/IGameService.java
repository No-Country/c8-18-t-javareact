package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.mapper.IGameMapper;
import com.nocontry.ecommerce.rest.dto.response.GameResponse;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface IGameService {

    List<GameResponse> getAllGames();

}

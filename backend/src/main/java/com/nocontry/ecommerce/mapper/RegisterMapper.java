package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.User;
import com.nocontry.ecommerce.rest.dto.RegisterDTO;
import com.nocontry.ecommerce.rest.dto.RegisterResponseDTO;

public interface RegisterMapper {

    public RegisterResponseDTO mapRegisterResponseDTO(RegisterDTO registerDTO);

    public User mapRegisterEntity(RegisterDTO registerDTO);

}

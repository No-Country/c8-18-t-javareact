package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.rest.dto.RegisterDTO;
import com.nocontry.ecommerce.rest.dto.RegisterResponseDTO;

public interface RegisterService {

    public RegisterResponseDTO createUser(RegisterDTO registerDTO);
}

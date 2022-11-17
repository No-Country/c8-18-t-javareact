package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.RegisterMapper;
import com.nocontry.ecommerce.persistence.model.User;
import com.nocontry.ecommerce.persistence.repository.UserRepository;
import com.nocontry.ecommerce.rest.dto.RegisterDTO;
import com.nocontry.ecommerce.rest.dto.RegisterResponseDTO;
import com.nocontry.ecommerce.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterServiceImpl implements RegisterService {

    @Autowired
    private RegisterMapper registerMapper;

    @Autowired
    private UserRepository userRepository;

    @Override
    public RegisterResponseDTO createUser(RegisterDTO registerDTO) {

        User user = registerMapper.mapRegisterEntity(registerDTO);

        userRepository.save(user);

        return registerMapper.mapRegisterResponseDTO(registerDTO);
    }
}


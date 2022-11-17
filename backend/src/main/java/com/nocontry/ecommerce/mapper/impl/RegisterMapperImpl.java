package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.RegisterMapper;
import com.nocontry.ecommerce.persistence.model.AccountState;
import com.nocontry.ecommerce.persistence.model.User;
import com.nocontry.ecommerce.rest.dto.RegisterDTO;
import com.nocontry.ecommerce.rest.dto.RegisterResponseDTO;
import com.nocontry.ecommerce.security.EncryptPassword;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterMapperImpl implements RegisterMapper {

    @Autowired
    private EncryptPassword encryptPassword;

    @Override
    public RegisterResponseDTO mapRegisterResponseDTO(RegisterDTO registerDTO) {

        RegisterResponseDTO registerResponseDTO = new RegisterResponseDTO();
        registerResponseDTO.setUsername(registerDTO.getUsername());
        registerResponseDTO.setEmail(registerDTO.getEmail());
        registerResponseDTO.setStatus(AccountState.ACTIVE);

        return registerResponseDTO;
    }

    @Override
    public User mapRegisterEntity(RegisterDTO registerDTO) {

        User user = new User();

        user.setUsername(registerDTO.getUsername());
        user.setEmail(registerDTO.getEmail());
        user.setPassword(encryptPassword.encryptPassword(registerDTO.getPassword()));
        user.setStatus(AccountState.ACTIVE);

        return user;
    }

}

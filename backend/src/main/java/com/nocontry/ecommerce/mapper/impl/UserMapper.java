package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IUserMapper;
import com.nocontry.ecommerce.persistence.model.AccountState;
import com.nocontry.ecommerce.persistence.model.User;
import com.nocontry.ecommerce.rest.dto.request.RegisterRequest;
import com.nocontry.ecommerce.rest.dto.response.RegisterResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserMapper implements IUserMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public RegisterResponse mapRegisterResponseDTO(RegisterRequest registerRequest) {

        RegisterResponse registerResponse = new RegisterResponse();
        registerResponse.setUsername(registerRequest.getUsername());
        registerResponse.setEmail(registerRequest.getEmail());
        registerResponse.setStatus(AccountState.ACTIVE);

        return registerResponse;
    }

    @Override
    public User mapRegisterEntity(RegisterRequest registerRequest) {

        User user = new User();

        user.setUsername(registerRequest.getUsername());
        user.setEmail(registerRequest.getEmail());
        user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        user.setStatus(AccountState.ACTIVE);

        return user;
    }

}

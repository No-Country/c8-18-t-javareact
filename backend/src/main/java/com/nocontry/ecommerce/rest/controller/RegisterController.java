package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.persistence.model.User;
import com.nocontry.ecommerce.persistence.repository.UserRepository;
import com.nocontry.ecommerce.rest.dto.RegisterDTO;
import com.nocontry.ecommerce.rest.dto.RegisterResponseDTO;
import com.nocontry.ecommerce.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDTO registerDTO){
        User user = userRepository.findByEmail(registerDTO.getEmail());
        if (registerDTO.getEmail().equalsIgnoreCase(user.getEmail())){
            return new ResponseEntity<>("Ese email de usuario ya existe", HttpStatus.BAD_REQUEST);
        }

        RegisterResponseDTO registerResponse = registerService.createUser(registerDTO);

        return new ResponseEntity<>(registerResponse,HttpStatus.OK);
    }
}

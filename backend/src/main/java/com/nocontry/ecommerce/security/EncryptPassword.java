package com.nocontry.ecommerce.security;

import org.springframework.security.crypto.bcrypt.BCrypt;

public class EncryptPassword {

    public String encryptPassword(String password){
        return BCrypt.hashpw(password, BCrypt.gensalt());
    }
}

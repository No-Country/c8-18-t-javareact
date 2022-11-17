package com.nocontry.ecommerce.rest.dto.response;

import com.nocontry.ecommerce.persistence.model.AccountState;
import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterResponse {

    private String username;
    private String email;
    private AccountState status;
}

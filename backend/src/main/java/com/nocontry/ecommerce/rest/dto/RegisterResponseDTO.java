package com.nocontry.ecommerce.rest.dto;

import com.nocontry.ecommerce.persistence.model.AccountState;
import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterResponseDTO {

    private String username;
    private String email;
    private AccountState status;
}

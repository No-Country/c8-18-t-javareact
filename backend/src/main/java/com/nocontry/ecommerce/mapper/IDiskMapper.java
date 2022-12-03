
package com.nocontry.ecommerce.mapper;

import com.nocontry.ecommerce.persistence.model.Disk;
import com.nocontry.ecommerce.rest.dto.response.DiskResponse;


public interface IDiskMapper {
    
    DiskResponse toDiskResponse(Disk disk);
}

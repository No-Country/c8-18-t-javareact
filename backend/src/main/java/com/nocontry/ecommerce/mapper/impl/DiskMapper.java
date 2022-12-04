
package com.nocontry.ecommerce.mapper.impl;

import com.nocontry.ecommerce.mapper.IDiskMapper;
import com.nocontry.ecommerce.persistence.model.Disk;
import com.nocontry.ecommerce.rest.dto.response.DiskResponse;
import org.springframework.stereotype.Service;

@Service
public class DiskMapper implements IDiskMapper{

    @Override
    public DiskResponse toDiskResponse(Disk disk) {
        return DiskResponse.builder()
                .id(disk.getArticleId())
                .title(disk.getTitle())
                .price(disk.getPrice())
                .description(disk.getDescription())
                .stock(disk.getStock())
                .image(disk.getImage())
                .artist(disk.getArtist())
                .duration(disk.getDuration())
                .build();
    }
    
}

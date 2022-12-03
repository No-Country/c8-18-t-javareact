
package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.mapper.IDiskMapper;
import com.nocontry.ecommerce.persistence.model.Disk;
import com.nocontry.ecommerce.persistence.repository.DiskRepository;
import com.nocontry.ecommerce.rest.dto.response.DiskResponse;
import com.nocontry.ecommerce.service.IDiskService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiskService implements IDiskService  {
    
    @Autowired
    private IDiskMapper diskMapper;
    @Autowired
    private DiskRepository diskRepo;

    @Override
    public List<DiskResponse> getAllDisk() {
        List<DiskResponse> diskResponses = new ArrayList();
        List<Disk> disks = diskRepo.findAll();
        disks.forEach(disk -> diskResponses.add(diskMapper.toDiskResponse(disk)));
        return diskResponses;
    }
    
}

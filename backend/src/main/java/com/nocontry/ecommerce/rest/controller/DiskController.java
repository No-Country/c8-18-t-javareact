
package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.rest.dto.response.DiskResponse;
import com.nocontry.ecommerce.service.IDiskService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiskController {
    
    @Autowired
    private IDiskService diskService;
    
    @GetMapping("/disks")
    public ResponseEntity<List<DiskResponse>> getAllDisk(){
        return ResponseEntity.ok(diskService.getAllDisk());
    }
}

package com.nocontry.ecommerce.persistence.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "disks")
public class Disk extends Article{

    @Column(name = "artist", nullable = false)
    private String artist;

    @Column(name = "duration", nullable = false)
    private Integer duration;
}

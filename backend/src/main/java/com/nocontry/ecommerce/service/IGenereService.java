package com.nocontry.ecommerce.service;

import com.nocontry.ecommerce.persistence.model.Genere;
import java.util.List;


public interface IGenereService {
    
    //Create 
    public Genere createGenere(String name);
    
    //List
    public List<Genere> toListGenere();
    
    //Find 
    public Genere findById(Long id);
    
    //Up date
    public void upDateGenere(Long id, String name);
    
    //Delete
    public void deleteGenere(Long id);
    
    
}


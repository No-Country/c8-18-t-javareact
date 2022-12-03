package com.nocontry.ecommerce.service;


import com.nocontry.ecommerce.persistence.model.TypeArticle;
import java.util.List;


public interface ITypeArticleService {
    
     //Create 
    public TypeArticle createTypeArticle(String description);
    
    //List
    public List<TypeArticle> toListTypeArticle();
    
    //Find 
    public TypeArticle findById(String id);
    
    //Up date
    public void upDateTypeArticle(String id, String descrption);
    
    //Delete
    public void deleteGenere(String id);
    
}

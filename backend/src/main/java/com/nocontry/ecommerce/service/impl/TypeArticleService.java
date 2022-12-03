package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.exception.MyException;
import com.nocontry.ecommerce.persistence.model.TypeArticle;
import com.nocontry.ecommerce.persistence.repository.TypeArticleRepository;
import com.nocontry.ecommerce.service.ITypeArticleService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeArticleService implements ITypeArticleService{
    
   
    @Autowired
    private TypeArticleRepository typeArticleRepo;

    @Transactional
    @Override
    public TypeArticle createTypeArticle(String description) {
        
        try {
            validate(description);
        } catch (MyException ex) {
            Logger.getLogger(TypeArticleService.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        TypeArticle typeArt = new TypeArticle();
        typeArt.setDescription(description);
        typeArticleRepo.save(typeArt);
        
        return typeArt;
    }

    @Override
    public List<TypeArticle> toListTypeArticle() {
        
        List<TypeArticle> typeArtList = new ArrayList();
        typeArtList = typeArticleRepo.findAll();
        
        return typeArtList;
    }

    @Override
    public TypeArticle findById(String id) {
        
        Optional<TypeArticle> optional = typeArticleRepo.findById(id);
        
        TypeArticle typeArtOp = optional.get();
        if(!optional.isPresent()){
            return null;
        }else{
            return typeArtOp;
        }
    }

    @Transactional
    @Override
    public void upDateTypeArticle(String id, String descrption) {
        
        try {
            validate(descrption);
            
            Optional<TypeArticle> optional = typeArticleRepo.findById(id);
            
            TypeArticle typeArtOp = null;
            if(optional.isPresent()){
                typeArtOp = optional.get();
                typeArtOp.setDescription(descrption);
                typeArticleRepo.save(typeArtOp);
                
            }
        } catch (MyException ex) {
            Logger.getLogger(TypeArticleService.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Transactional
    @Override
    public void deleteGenere(String id) {
        
         Optional<TypeArticle> optional = typeArticleRepo.findById(id);
         
         if(optional.isPresent()){
            TypeArticle typeArtOp = optional.get();
            typeArtOp.getType();
            typeArticleRepo.delete(typeArtOp);
         }
    }
    
    
    public void validate(String description) throws MyException {

        if (description.isEmpty() || description == null || description.matches("^([A-Z]{1}[a-záéíóú]+[ ]?){1,3}$") == false) {
            throw new MyException(" Enter a valid gender ");
        }
    }
}

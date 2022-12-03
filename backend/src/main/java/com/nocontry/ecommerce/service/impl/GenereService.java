package com.nocontry.ecommerce.service.impl;

import com.nocontry.ecommerce.exception.MyException;
import com.nocontry.ecommerce.persistence.model.Genere;
import com.nocontry.ecommerce.persistence.repository.GenereRepository;
import com.nocontry.ecommerce.service.IGenereService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GenereService implements IGenereService {

    @Autowired
    private GenereRepository genereRepository;

    @Transactional
    @Override
    public Genere createGenere(String name) {

        try {
            validate(name);
        } catch (MyException ex) {
            Logger.getLogger(GenereService.class.getName()).log(Level.SEVERE, null, ex);
        }

        Genere genere = new Genere();
        genere.setName(name);
        genereRepository.save(genere);

        return genere;
    }

    @Override
    public List<Genere> toListGenere() {

        List<Genere> genereList = new ArrayList();

        genereList = genereRepository.findAll();

        return genereList;
    }

    @Override
    public Genere findById(Long id) {

        Optional<Genere> optional = genereRepository.findById(id);

        Genere genereOp = optional.get();
        if (!optional.isPresent()) {
            return null;
        } else {
            return genereOp;
        }
    }

    @Transactional
    @Override
    public void upDateGenere(Long id, String name) {

        try {
            validate(name);
        } catch (MyException ex) {
            Logger.getLogger(GenereService.class.getName()).log(Level.SEVERE, null, ex);
        }

        Optional<Genere> optional = genereRepository.findById(id);

        Genere genereOp = null;
        if (optional.isPresent()) {
            genereOp = optional.get();
            genereOp.setName(name);
            genereRepository.save(genereOp);
        }
    }

    @Transactional
    @Override
    public void deleteGenere(Long id) {

        Optional<Genere> optional = genereRepository.findById(id);

        if (optional.isPresent()) {
            Genere genereOp = optional.get();
            genereOp.getId();
            genereRepository.delete(genereOp);
        }
    }

    public void validate(String name) throws MyException {

        if (name.isEmpty() || name == null || name.matches("^([A-Z]{1}[a-záéíóú]+[ ]?){1,3}$") == false) {
            throw new MyException(" Enter a valid gender ");
        }
    }

}

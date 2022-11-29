package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.persistence.model.Genere;
import com.nocontry.ecommerce.service.impl.GenereService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/Genere")
public class GenereController {

    public String message = "Successful update";
    public String list = "Not found gender";
    public String delete = " Gender removed";

    @Autowired
    private GenereService genereService;

    @GetMapping("/list")
    public String toList(ModelMap model) {

        List<Genere> genereList = genereService.toListGenere();
        model.addAttribute("genere", genereList);
        return "genere/genereList.html";

    }

    @GetMapping("/search")
    public String findGenereByName(@RequestParam(required = false) String name, Long id, ModelMap model) {

        if(name.isEmpty()){
            List<Genere> genereList = genereService.toListGenere();
            if(genereList.isEmpty()){
                model.put("empty", list);
            }
            model.addAttribute("genere", genereList);
        }else{
            Genere genere = genereService.findById(id);
            if(genere == null){
                model.put("empty", list);
            }else{
                model.addAttribute("genere", genere);
            }
        }
        
        return "genere/genereList.html";
    }
    
    @GetMapping("/registration")
    public String save() {
        return "registration/genere_registration";
    }

    @PostMapping("/toregister")
    public String saveGenere(@RequestParam String name, ModelMap model) {

        try {
            genereService.createGenere(name);
            List<Genere> genereList = genereService.toListGenere();
            model.put("ok", message);
            model.addAttribute("genere", genereList);
            return "genere/genereList.html";

        } catch (Exception e) {
             model.put("error", e.getMessage());
            return "genere/genereList.html";
        }
    }
    
    @GetMapping("/upDate/{id}")
    public String upDateGenere(@PathVariable Long id, ModelMap model){
        
        Genere genere = genereService.findById(id);
        model.addAttribute("genere", genere);
      return "genere/genereUpDate.html";
    }

    @PostMapping("/modified/{id}")
    public String ganereModified(@PathVariable Long id, @RequestParam String name, ModelMap model){
        
        try {
            
             List<Genere> genereList = genereService.toListGenere();
             genereService.upDateGenere(id, name);
             model.put("ok", message);
             model.addAttribute("genere", genereList);
             return "genere/genereList.html";
            
        } catch (Exception e) {
            model.put("failed", e.getMessage());
            return "genere/genereList.html";
        }
    }
    
    @GetMapping("/delete/{id}")
    public String deleteGenere(@PathVariable Long id, ModelMap model){
        
        try {
            genereService.deleteGenere(id);
            model.put("ok", delete);
            return "genere/generelist.html";
        } catch (Exception e) {
            model.put("failed", e.getMessage());
            return "genere/generelist.html";
        }
    }    
}

package com.nocontry.ecommerce.rest.controller;

import com.nocontry.ecommerce.persistence.model.TypeArticle;
import com.nocontry.ecommerce.service.impl.TypeArticleService;
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
@RequestMapping("/typeArticle")
public class TtpeArticleController {

    @Autowired
    private TypeArticleService typeService;

    public String message = "Successful update";
    public String list = "Not found type article";
    public String delete = " Gender removed";

    @GetMapping("/list")
    public String toList(ModelMap model) {

        List<TypeArticle> typeArtList = typeService.toListTypeArticle();
        model.addAttribute("typeArticle", typeArtList);
        return "typeArticle/typeArtList.html";
    }

    @GetMapping("/searchTypeArt")
    public String findArticleByName(@RequestParam(required = false) String description, String type, ModelMap model) {

        if (description.isEmpty()) {
            List<TypeArticle> typeList = typeService.toListTypeArticle();
            if (typeList.isEmpty()) {
                model.put("empty", list);
            }
            model.addAttribute("typeArticle", typeList);
        } else {
            TypeArticle typeArt = typeService.findById(list);
            if (typeArt == null) {
                model.put("empty", list);
            } else {
                model.addAttribute("typeArticle", typeArt);
            }
        }

        return "typeArticle/typeArtList.html";
    }

    @GetMapping("/registration")
    public String save() {
        return "registration/typeArticle_registration";
    }

    @PostMapping("/toregister")
    public String saveTypeArticle(@RequestParam String description, ModelMap model) {

        try {
            typeService.createTypeArticle(description);
            List<TypeArticle> typeList = typeService.toListTypeArticle();
            model.put("ok", message);
            model.addAttribute("typeArticle", typeList);
            return "typeArticle/typeArtList.html";

        } catch (Exception e) {
            model.put("error", e.getMessage());
            return "typeArticle/typeArtList.html";
        }
    }

    @GetMapping("/upDate/{id}")
    public String upDateTypeArticle(@PathVariable String type, ModelMap model) {

        TypeArticle typeArt = typeService.findById(list);
        model.addAttribute("typeArticle", typeArt);
        return "typeArticle/typeArtUpDate.html";
    }

    @PostMapping("/modified/{id}")
    public String typeArticleModified(@PathVariable String type, @RequestParam String description, ModelMap model) {

        try {

            List<TypeArticle> typeList = typeService.toListTypeArticle();
            typeService.upDateTypeArticle(list, description);
            model.put("ok", message);
            model.addAttribute("typeArticle", typeList);
            return "typeArticle/typeArtList.html";

        } catch (Exception e) {
            model.put("failed", e.getMessage());
            return "typeArticle/typeArtList.html";
        }
    }

    @GetMapping("/delete/{id}")
    public String deleteTypeArticle(@PathVariable String type, ModelMap model) {

        try {
            typeService.deleteGenere(list);
            model.put("ok", delete);
            return "typeArticle/typeArtList.html";
        } catch (Exception e) {
            model.put("failed", e.getMessage());
            return "typeArticle/typeArtList.html";
        }
    }
}

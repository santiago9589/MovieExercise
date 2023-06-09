package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Protagonist;
import com.api.backendmovie.services.ProtagonistServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/protagonist")
public class ProtagonistController implements ControllerImp<Protagonist,Long> {

    private ProtagonistServices protagonistServices;

    public ProtagonistController(ProtagonistServices protagonistServices) {
        this.protagonistServices = protagonistServices;
    }

    @GetMapping("/getOneProtagonist")
    @Override
    public Protagonist getOneController(Long id) {
        Protagonist ProtagonistFound = protagonistServices.getOneRecord(id);
        return ProtagonistFound;
    }

    @GetMapping("/getProtagonist")
    @Override
    public List<Protagonist> getAllController() {
        List<Protagonist> listProtagonistFound = protagonistServices.getAllRecords();
        return listProtagonistFound;
    }

    @PostMapping("/addOne")
    @Override
    public Protagonist addOneController(Protagonist protagonist) {
        Protagonist protagonistFound = protagonistServices.addOneRecord(protagonist);
        return protagonistFound;
    }
}

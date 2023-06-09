package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Protagonist;
import com.api.backendmovie.services.ProtagonistServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.api.backendmovie.services.ProtagonistServices;

import java.util.List;

@RestController
@RequestMapping("/api/protagonist")
public class ProtagonistController implements ControllerImp<Protagonist,Long> {

    private ProtagonistServices protagonistServices;

    public ProtagonistController() {
    }

    public ProtagonistController(ProtagonistServices protagonistServices) {
        this.protagonistServices = protagonistServices;
    }


    @GetMapping("/getOne")
    @Override
    public Protagonist getOne(Long id) {

        Protagonist protagonistFound = protagonistServices.getOne(id);
        return protagonistFound;
    }

    @GetMapping("/getList")
    @Override
    public List<Protagonist> getAll() {

        List<Protagonist> listProtagonistFound = protagonistServices.getAll();
        return listProtagonistFound;
    }
}

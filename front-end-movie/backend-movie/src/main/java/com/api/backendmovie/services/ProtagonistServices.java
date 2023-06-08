package com.api.backendmovie.services;

import com.api.backendmovie.dao.Dao;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.entities.Protagonist;
import com.api.backendmovie.repositories.MovieRepository;
import com.api.backendmovie.repositories.ProtagonistRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ProtagonistServices implements Dao<Protagonist,Long> {

    @Autowired
    private ProtagonistRepository ProtagonistRepository;

    @Override
    public Protagonist getOne(Long id) {

        Optional<Protagonist> protagonist = ProtagonistRepository.findById(id);

        if(!protagonist.isPresent()) {
            return null;
        }
        return protagonist.get();
    }

    @Override
    public List<Protagonist> getAll() {

        List<Protagonist> listProtagonist = ProtagonistRepository.findAll();
        return listProtagonist;
    }
}

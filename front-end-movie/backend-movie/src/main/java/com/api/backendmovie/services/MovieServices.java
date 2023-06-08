package com.api.backendmovie.services;

import com.api.backendmovie.dao.Dao;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class MovieServices implements Dao<Movie,Long> {

    @Autowired
    private MovieRepository MovieRepository;

    @Override
    public Movie getOne(Long id) {

        Optional<Movie> movie = MovieRepository.findById(id);

        if(!movie.isPresent()) {
            return null;
        }
        return movie.get();
    }

    @Override
    public List<Movie> getAll() {

        List<Movie> listMovie = MovieRepository.findAll();
        return listMovie;
    }
}

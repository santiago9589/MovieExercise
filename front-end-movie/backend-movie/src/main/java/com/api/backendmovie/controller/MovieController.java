package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.services.MovieServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/movie")
public class MovieController implements ControllerImp<Movie,Long> {

    private MovieServices movieServices;

    public MovieController() {
    }

    public MovieController(MovieServices movieServices) {
        this.movieServices = movieServices;
    }


    @GetMapping("/getOne")
    @Override
    public Movie getOne(Long id) {

        Movie movieFound = movieServices.getOne(id);
        return movieFound;
    }

    @GetMapping("/getList")
    @Override
    public List<Movie> getAll() {

        List<Movie> listMovieFound = movieServices.getAll();
        return listMovieFound;
    }
}

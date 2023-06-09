package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.services.MovieServices;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/movie")
public class MovieController implements ControllerImp<Movie,Long> {

    private MovieServices movieServices;

    public MovieController(MovieServices movieServices) {
        this.movieServices = movieServices;
    }


 @GetMapping("/getOneMovie")
    @Override
    public Movie getOneController(Long id) {

        Movie movieFound = movieServices.getOneRecord(id);
        return movieFound;
    }

    @GetMapping("/getList")
    @Override
    public List<Movie> getAllController() {

        List<Movie> listMovieFound = movieServices.getAllRecords();
        return listMovieFound;
    }


    @PostMapping("/addOne")
    @Override
    public Movie addOneController(Movie movie) {

        Movie newMovie = movieServices.addOneRecord(movie);

        return newMovie;
    }




}

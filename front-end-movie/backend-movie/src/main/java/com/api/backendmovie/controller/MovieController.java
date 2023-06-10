package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.services.MovieServices;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/deleteOne/{id}")
    @Override
    public String deleteOneController(Long id) {
        String response = movieServices.deleteOneRecord(id);
        return response;
    }

    @RequestMapping("/updateOne/{id}")
    @Override
    public Movie updateOneController(Movie movie,@PathVariable Long id) {
        Movie updateMovie = movieServices.updateOneRecord(movie,id);
        return updateMovie;
    }



}

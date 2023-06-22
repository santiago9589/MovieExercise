package com.api.backendmovie.services;

import com.api.backendmovie.dao.Dao;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class MovieServices implements Dao<Movie,Long> {

    @Autowired
    private MovieRepository MovieRepository;

    @Override
    public Movie getOneRecord(Long id) {

        Optional<Movie> movie = MovieRepository.findById(id);

        if(!movie.isPresent()) {
            return null;
        }
        return movie.get();
    }

    @Override
    public List<Movie> getAllRecords() {

        List<Movie> listMovie = MovieRepository.findAll();
        return listMovie;
    }

    @Override
    public Movie addOneRecord(Movie movie) {
        Movie newMovie = MovieRepository.save(movie);

        return newMovie;
    }


    @Override
    public String deleteOneRecord(Long id) {
        MovieRepository.deleteById(id);
        return "deleted successfully";
    }

    @Override
    public Movie updateOneRecord(Movie movie,Long id) {

        Optional<Movie> updateMovie = MovieRepository.findById(id);

        if(!updateMovie.isPresent()){
            return null;
        }

       updateMovie.get().setNameMovie(movie.getNameMovie());
        updateMovie.get().setGenderMovie(movie.getGenderMovie());
        updateMovie.get().setRaiting(movie.getRaiting());
        updateMovie.get().setImageMovie(movie.getImageMovie());

       MovieRepository.save(updateMovie.get());

        return updateMovie.get();
    }
}

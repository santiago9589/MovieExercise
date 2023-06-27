package com.api.backendmovie.services;

import com.api.backendmovie.dao.Dao;
import com.api.backendmovie.dao.DaoRegister;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.entities.User;
import com.api.backendmovie.repositories.MovieRepository;
import com.api.backendmovie.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserServices implements DaoRegister<User,Long> {

    private UserRepository  UserRepository;

    public UserServices(UserRepository userRepository) {
        UserRepository = userRepository;
    }
    @Override
    public User registerOneUser(User value) {
        User user = UserRepository.save(value);
        return user;
    }
    @Override
    public User getOneUser(Long id) {
        Optional<User> user = UserRepository.findById(id);
        if (!user.isPresent()) {
            return null;
        }
        return user.get();
    }

    @Override
    public User deleteOneUser(User user) {
       UserRepository.deleteById(user.getId());
       return user;
    }

    @Override
    public User verifyOneUser(User value) {
        User user = this.getOneUser(value.getId());

        if(user.getId() == null){
            return null;
        }
        return user;
    }
}

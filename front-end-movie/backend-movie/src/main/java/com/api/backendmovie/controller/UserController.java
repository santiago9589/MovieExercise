package com.api.backendmovie.controller;

import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.dao.ControllerImpUser;
import com.api.backendmovie.entities.Movie;
import com.api.backendmovie.entities.User;
import com.api.backendmovie.services.MovieServices;
import com.api.backendmovie.services.UserServices;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/user")
public class UserController implements ControllerImpUser<User,Long> {

    private UserServices UserServices;



    public UserController(UserServices userServices) {
        UserServices = userServices;
    }


    @PostMapping("/addUser")
    @Override
    public User addOneController(@RequestBody User value) {
        User user = UserServices.registerOneUser(value);

        return user;
    }

    @DeleteMapping("/deleteUser")
    @Override
    public User deleteOneController(@RequestBody  User user) {
        User userDeleted = UserServices.deleteOneUser(user);
        return userDeleted;
    }


    @GetMapping("/verifyUser")
    @Override
    public User verifyOneController(@RequestBody User value) {
        User user = UserServices.verifyOneUser(value);
        return user;
    }
}

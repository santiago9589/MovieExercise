package com.api.backendmovie.dao;

import java.util.List;

public interface ControllerImp <T,K>{

    T getOne(K id);

    List<T> getAll();



}

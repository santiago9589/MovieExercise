package com.api.backendmovie.dao;

import java.util.List;

public interface ControllerImp <T,K>{

    T getOneController(K id);

    List<T> getAllController();

    T addOneController(T value);

    String deleteOneController(K id);

    T updateOneController(T value,K id);
}

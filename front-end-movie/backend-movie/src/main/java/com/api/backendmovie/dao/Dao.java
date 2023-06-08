package com.api.backendmovie.dao;

import java.util.List;

public interface Dao<T,K> {

    T getOne(K id);

    List<T> getAll();


}

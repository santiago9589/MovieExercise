package com.api.backendmovie.dao;

import java.util.List;

public interface Dao<T,K> {

    T getOneRecord(K id);

    List<T> getAllRecords();

    T addOneRecord(T value);

    String deleteOneRecord(K id);

    T updateOneRecord(T value,K id);
}

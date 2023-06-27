package com.api.backendmovie.dao;

import java.util.List;

public interface DaoRegister<T,K> {

    T registerOneUser(T value);

    T getOneUser(K value);

    T deleteOneUser(T value);

    T verifyOneUser(T value);
}

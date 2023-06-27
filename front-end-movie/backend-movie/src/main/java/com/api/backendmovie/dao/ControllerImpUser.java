package com.api.backendmovie.dao;

import java.util.List;

public interface ControllerImpUser<T,K>{

    T addOneController(T value);

    T deleteOneController(T value);

    T verifyOneController(T value);
}

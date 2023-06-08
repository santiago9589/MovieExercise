package com.api.backendmovie.repositories;

import com.api.backendmovie.entities.Protagonist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProtagonistRepository extends JpaRepository<Protagonist,Long> {
}

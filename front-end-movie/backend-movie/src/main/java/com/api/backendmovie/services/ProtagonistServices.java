package com.api.backendmovie.services;

import com.api.backendmovie.dao.Dao;
import com.api.backendmovie.entities.Protagonist;
import com.api.backendmovie.repositories.ProtagonistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProtagonistServices implements Dao<Protagonist,Long> {

    @Autowired
    private ProtagonistRepository ProtagonistRepository;

    @Override
    public Protagonist getOneRecord(Long id) {

        Optional<Protagonist> protagonist = ProtagonistRepository.findById(id);

        if(!protagonist.isPresent()) {
            return null;
        }
        return protagonist.get();
    }

    @Override
    public List<Protagonist> getAllRecords() {

        List<Protagonist> listProtagonist = ProtagonistRepository.findAll();
        return listProtagonist;
    }

    @Override
    public Protagonist addOneRecord(Protagonist protagonist) {
        Protagonist newProtagonist = ProtagonistRepository.save(protagonist);

        return newProtagonist;
    }

    @Override
    public String deleteOneRecord(Long id) {
        ProtagonistRepository.deleteById(id);
        return "deleted successfully";
    }

    @Override
    public Protagonist updateOneRecord(Protagonist protagonist,Long id) {
        Protagonist updateProtagonist = ProtagonistRepository.getReferenceById(id);

        updateProtagonist.setNameProtagonist(protagonist.getNameProtagonist());

        updateProtagonist.setLastNameProtagonist(protagonist.getLastNameProtagonist());

        ProtagonistRepository.save(updateProtagonist);

        return updateProtagonist;
    }
}

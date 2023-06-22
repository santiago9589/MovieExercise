package com.api.backendmovie.controller;
import com.api.backendmovie.dao.ControllerImp;
import com.api.backendmovie.entities.Protagonist;
import com.api.backendmovie.services.ProtagonistServices;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/protagonist")
public class ProtagonistController implements ControllerImp<Protagonist,Long> {

    private ProtagonistServices protagonistServices;

    public ProtagonistController(ProtagonistServices protagonistServices) {
        this.protagonistServices = protagonistServices;
    }

    @GetMapping("/getOneProtagonist/{id}")
    @Override
    public Protagonist getOneController(@PathVariable Long id) {
        Protagonist ProtagonistFound = protagonistServices.getOneRecord(id);
        return ProtagonistFound;
    }

    @GetMapping("/getProtagonist")
    @Override
    public List<Protagonist> getAllController() {
        List<Protagonist> listProtagonistFound = protagonistServices.getAllRecords();
        return listProtagonistFound;
    }

    @PostMapping("/addOne")
    @Override
    public Protagonist addOneController(@RequestBody Protagonist protagonist) {
        Protagonist protagonistFound = protagonistServices.addOneRecord(protagonist);
        return protagonistFound;
    }

    @DeleteMapping("/deleteOne/{id}")
    @Override
    public String deleteOneController(@PathVariable Long id) {
        String response = protagonistServices.deleteOneRecord(id);
        return response;
    }

    @RequestMapping("/updateOne/{id}")
    @Override
    public Protagonist updateOneController(@RequestBody  Protagonist protagonist,@PathVariable Long id) {
        Protagonist updateProtagonist = protagonistServices.updateOneRecord(protagonist,id);
        return updateProtagonist;
    }
}

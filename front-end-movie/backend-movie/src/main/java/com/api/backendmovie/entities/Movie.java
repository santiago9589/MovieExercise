package com.api.backendmovie.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;


import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Movies")
public class Movie implements Serializable {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nameMovie;
    private String genderMovie;

    @Temporal(TemporalType.TIMESTAMP)
    private Date datePublished;

    private Integer Raiting;

    private String imageMovie;

    private String resumenMovie;

    @OneToMany(mappedBy = "movie")
    @JsonIgnore
    private List<Protagonist> listProtagonist;


    public Movie() {
    }

    public Movie(Long id, String nameMovie, String genderMovie, Date datePublished, Integer raiting, String imageMovie, String resumenMovie, List<Protagonist> listProtagonist) {
        this.id = id;
        this.nameMovie = nameMovie;
        this.genderMovie = genderMovie;
        this.datePublished = datePublished;
        Raiting = raiting;
        this.imageMovie = imageMovie;
        this.resumenMovie = resumenMovie;
        this.listProtagonist = listProtagonist;
    }

    @PrePersist
    public void startDatePublished() {
        this.setDatePublished(new Date());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameMovie() {
        return nameMovie;
    }

    public void setNameMovie(String nameMovie) {
        this.nameMovie = nameMovie;
    }

    public String getGenderMovie() {
        return genderMovie;
    }

    public void setGenderMovie(String genderMovie) {
        this.genderMovie = genderMovie;
    }

    public Date getDatePublished() {
        return datePublished;
    }

    public void setDatePublished(Date datePublished) {
        this.datePublished = datePublished;
    }

    public Integer getRaiting() {
        return Raiting;
    }

    public void setRaiting(Integer raiting) {
        Raiting = raiting;
    }

    public String getImageMovie() {
        return imageMovie;
    }

    public void setImageMovie(String imageMovie) {
        this.imageMovie = imageMovie;
    }

    public String getResumenMovie() {
        return resumenMovie;
    }

    public void setResumenMovie(String resumenMovie) {
        this.resumenMovie = resumenMovie;
    }

    public List<Protagonist> getListProtagonist() {
        return listProtagonist;
    }

    public void setListProtagonist(List<Protagonist> listProtagonist) {
        this.listProtagonist = listProtagonist;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", nameMovie='" + nameMovie + '\'' +
                ", genderMovie='" + genderMovie + '\'' +
                ", datePublished=" + datePublished +
                ", Raiting=" + Raiting +
                ", imageMovie='" + imageMovie + '\'' +
                ", resumenMovie='" + resumenMovie + '\'' +
                ", listProtagonist=" + listProtagonist +
                '}';
    }
}

package com.api.backendmovie.entities;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;


@Entity
@Table(name = "Protagonists")
public class Protagonist {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nameProtagonist;
    private String lastNameProtagonist;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dateOfBirth;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    private Movie movie;


    public Protagonist() {
    }

    public Protagonist(Long id, String nameProtagonist, String lastNameProtagonist, Date dateOfBirth, Movie movie) {
        this.id = id;
        this.nameProtagonist = nameProtagonist;
        this.lastNameProtagonist = lastNameProtagonist;
        this.dateOfBirth = dateOfBirth;
        this.movie = movie;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameProtagonist() {
        return nameProtagonist;
    }

    public void setNameProtagonist(String nameProtagonist) {
        this.nameProtagonist = nameProtagonist;
    }

    public String getLastNameProtagonist() {
        return lastNameProtagonist;
    }

    public void setLastNameProtagonist(String lastNameProtagonist) {
        this.lastNameProtagonist = lastNameProtagonist;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    @Override
    public String toString() {
        return "Protagonist{" +
                "id=" + id +
                ", nameProtagonist='" + nameProtagonist + '\'' +
                ", lastNameProtagonist='" + lastNameProtagonist + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", movie=" + movie +
                '}';
    }
}

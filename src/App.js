import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

// const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=dc018c0";
const API_URL = "https://www.omdbapi.com?apikey=dc018c0"

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState();

        useEffect(() => {
        searchMovies("superman");
        }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };


    return (
        <div className="app">
            <h1>Netflix</h1>
            <div className="search">
                <input
                    value={searchTerm}
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                    placeholder="Search for Movies"
                />
                <img src={SearchIcon} 
                alt="Search" 
                onClick={() => searchMovies(searchTerm)} 
                />
            </div>

            { movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>
                </div>
            )}
        </div>
    );
};

export default App;

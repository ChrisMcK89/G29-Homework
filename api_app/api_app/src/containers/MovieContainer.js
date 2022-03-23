import {useEffect, useState} from "react";
import MoviesList from "../components/MoviesList";
import Movie from "../components/Movie";
import MovieSelect from "../components/MovieSelect";

const MovieContainer = () => {

    var Highcharts = require('highcharts');  




    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);



    useEffect(() => {
      getMovies();
    }, [])

    const searchterm = "aliens";

    const getMovies = function(){
        fetch('http://www.omdbapi.com/?apikey=682debb8&s=aliens')
        .then(result => result.json())
        .then(data => setMovies(data.Search))
    }
   
    const onMovieClick = function(country){
        setSelectedMovie(country);
    }

    return(
        <div className="Movie-Container">
        <MovieSelect movies={movies} onMovieClick={onMovieClick}/>
               
        <MoviesList movies={movies} />
        </div>
    )

}

export default MovieContainer;
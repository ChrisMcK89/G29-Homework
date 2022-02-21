const Movie = ({movie}) => {
    return (
        <div className="Movie">
            <li>
                <h2>{movie.Title}</h2>
                <h3>{movie.Year}</h3>
                <button><img src={movie.Poster} /></button>

            </li>
        </div> 
    )
    
}

export default Movie;

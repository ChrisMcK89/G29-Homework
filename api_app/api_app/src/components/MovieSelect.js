const MovieSelect = ({movies, onMovieClick}) => {

    const handleMovieChange = function(event){
        const chosenMovie = movies[event.target.value];
        onMovieClick(chosenMovie);
    }

    const MovieOptions = movies.map((movie, index) => {
        return <option key={index} value={index}>{movie.Title}</option>
    })

    return (
        <div className='movie-select'>
            <select defaultValue='' onChange={handleMovieChange}>
                <option value='' selected>Pick a Movie</option>
                {MovieOptions}
            </select>
        </div>
    )
}

export default MovieSelect;
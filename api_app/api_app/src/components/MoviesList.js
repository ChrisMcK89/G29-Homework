import Movie from "./Movie"

const MoviesList = ({movies}) => {

    let MoviesItems = movies.map((movie, index) => {
        return <Movie key={index} movie={movie} />

    })

    return (
        <div className="Movie-List">
            <ul>
                {MoviesItems}
            </ul>
        </div>
    )
}


export default MoviesList;
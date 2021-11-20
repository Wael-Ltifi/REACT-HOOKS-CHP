import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({md}) => {
    return (
        <div className="list">
        {md.map(elm=><MovieCard key= {elm.id} m={elm}/>)}
        </div>
    )
}

export default MovieList

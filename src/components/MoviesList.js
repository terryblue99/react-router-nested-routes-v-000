// render React Router Links for each movie
import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {
	const renderMovies = movies.map(movie =>
		<p key={movie.id}><Link to={'/movies/${movie.id}'}>{movie.title}</Link></p>
	)

	return (
		<div>
			{renderMovies}
		</div>
	)
}

export default MoviesList

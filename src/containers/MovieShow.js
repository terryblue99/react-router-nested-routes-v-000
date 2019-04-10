// display details about a given movie
import React from 'react'
import { connect } from 'react-redux'

const MovieShow = ({ movie }) => 
	<div>
		<h3>Title: {movie.title}</h3>
	</div>

const mapStateToProps = (state, ownProps) => {
	// access the :movieId from the URL via match.params on ownProps
	const movie = state.movies.find(movie => movie.id === Number(ownProps.match.params.movieId))
	
	if (movie) {
		return { movie }
	} else {
		// return an empty object as the movie when no movie found
		return {movie: {}}
	}
	
}

export default connect(mapStateToProps)(MovieShow)

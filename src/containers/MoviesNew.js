import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMovie } from '../actions'

class MoviesNew extends Component {

	state = {
		title: ''
	}

	handleOnSubmit = event => {
		event.preventDefault()
		// Destructure addMovie and history from the components props
		const { addMovie, history } = this.props
		// Create the movie with the Redux action
		addMovie(this.state)
		// redirect to /movies route
		history.push('/movies')
	}

	handleOnChange = event => {
		this.seState({
			title: event.target.value
		})
	}

	render() {
		return (
			<form style={{ marginTop: '16px' }} onSubmit={this.handleOnSubmit}>
				<input
					type='text'
					onChange={this.handleOnChange}
					placeholder='Add a Movie' 
				/>
				<label> </label><input type='submit' value='Add Movie' />
			</form>
		)
	} 
}

export default connect(null, { addMovie })(MoviesNew)

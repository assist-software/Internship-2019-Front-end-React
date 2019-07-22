import React from 'react';
import '../Admin/admin.css';
import Popup from './PopUp/Popup';
import Movie from './movie/Movie';

class Admin extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount = () => this.getMovies()

	getMovies = () => {
		let url = "http://localhost:3001/movies/"
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				let movies = data.map(item =>
					<Movie key={item.id}
						id={item.id} title={item.title}
						release={item.releaseDate}
						gen={item.category}
						img={item.coverUrl}
					/>)
				this.setState({ movieList: movies })
			})
	}

	render() {
		return (
			<div id="admin">
				<div id="container">
					<div id="main">
						<ul id="movie">
							{this.state.movieList && this.state.movieList}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default Admin

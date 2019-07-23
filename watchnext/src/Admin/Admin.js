import React from 'react'
import '../Admin/admin.css'
import Popup from './PopUp/Popup'
import Movie from './movie/Movie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import api from "../api-connection.js"

class Admin extends React.Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount = () => this.getMovies()

	getMovies = () => {
		fetch(api.movies)
			.then(resp => resp.json())
			.then(data => {
				let movies = data.map(item =>
					<Movie key={item.id}
						id={item.id} title={item.title}
						release={item.releaseDate}
						gen={item.category}
						img={item.coverUrl}
						dm={this.deleteMovie}
					/>)
				this.setState({ data:movies, movieList: movies})
			})
	}

	deleteMovie = (id) => {
	
		this.setState((p)=>{
			return {
				data:p.data.filter((item) => item.props.id != id),
				movieList:p.data.filter((item) => item.props.id != id)
			}
		})
		fetch(api.movies + id, {
			method: 'DELETE'
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			alert("Ok")
		});
	}

	search = (event) => {
		let movieName = event.target.value.toLowerCase()
		let movies = this.state.data
		.filter((item) => item.props.title.toLowerCase().includes(movieName))
		this.setState({movieList:movies})
	}

	render() {
		return (
			<div id="admin">
				<div id="container">
					<div id="main">
						<div id="top">
							<div>
								<input type="text" placeholder="Search for a movie" id="searchI" onChange={this.search.bind(this)}/>
								<FontAwesomeIcon icon={faSearch} id="ico" />
							</div>
							<div>
								<button>Add new </button>
							</div>
						</div>
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

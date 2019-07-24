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
		this.state = {
			popupVisible:false,
			popup_id:3
		}
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
						dm={this.displayDeletePopUp}
					/>)
				this.setState({ data:movies, movieList: movies})
			})
	}

	displayDeletePopUp = (id) => {
		this.setState({popupVisible:true,popup_id:3,delId:id})
	}

	deleteAnswer = (answer) => {
		if(answer){
			this.deleteMovie(this.state.delId)
		}else{
			this.updatePopupVisibility(false)
			this.getMovies()
		}
	}

	deleteMovie = (id) => {
		this.setState((p)=>{
			return {
				data:p.data.filter((item) => item.props.id != id),
				movieList:p.data.filter((item) => item.props.id != id)
			}
		})
		fetch(api.delMovie + id, {
			method: 'DELETE'
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
		});
			this.setState({popupVisible:false})
	}

	search = (event) => {
		let movieName = event.target.value.toLowerCase()
		let movies = this.state.data
		.filter((item) => item.props.title.toLowerCase().includes(movieName))
		this.setState({movieList:movies})
	}

	addNew = () => {
		this.setState({popup_id:1,popupVisible:true})
	}

	updatePopupVisibility = (val) => {
		this.setState({popupVisible:val})
	}

	render() {

		if (localStorage.getItem('user_rol') != 1 || localStorage.getItem('user_rol') == 'undefined' || localStorage.getItem('user_rol') == '') {
			this.props.history.push("/home")
		}

		return (
			<div id="admin">
				<Popup popup_id={this.state.popup_id} visible={this.state.popupVisible} updatePopupVisibility={this.updatePopupVisibility} ans={this.deleteAnswer}/>
				<div id="container">
					<div id="main">
						<div id="top">
							<div>
								<input type="text" placeholder="Search for a movie" id="searchI" onChange={this.search.bind(this)}/>
								<FontAwesomeIcon icon={faSearch} id="ico" />
							</div>
							<div>
								<button onClick={() => this.addNew()}>Add new </button>
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

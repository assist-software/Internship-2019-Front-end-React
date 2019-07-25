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
			popup_id:3,
			searchTxt: '',
			loaded:false
		}
	}

	componentDidMount = () => this.getMovies()
	
	getMovies = () => {
		fetch(api.movies)
			.then(resp => resp.json())
			.then(data => {
				let movies = data.map(item =>
					<Movie key={item.id}
						{...item}
						originalSourceUrl={item.originalSourceUrl}
						dm={this.displayDeletePopUp}
						edit={this.edit}
	
					/>)
				this.setState({ data:movies, movieList: movies, loaded:true})
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

	refreshList = (id) => {
		this.setState((p)=>{
			return {
				data:p.data.filter((item) => item.props.id != id),
				movieList:p.data.filter((item) => item.props.id != id)
			}
		})
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
		this.setState({movieList:movies,searchTxt:event.target.value})
	}

	addNew = () => {
		this.setState({popup_id:1,popupVisible:true})
	}

	updatePopupVisibility = (val) => {
		this.setState({popupVisible:val})
	}

	edit = (data) => {
		window.scrollTo(0, 220)
		this.setState({popup_id:2,popupVisible:true,item:data})
	}

	render() {
		return (
			<div id="admin">
				{<Popup refreshList = {this.getMovies} popup_id={this.state.popup_id} forwardRef ="pop" key={22} visible={this.state.popupVisible} updatePopupVisibility={this.updatePopupVisibility} ans={this.deleteAnswer} item={this.state.item}  />}
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
					{
						(this.state.movieList && this.state.movieList.length == 0 && this.state.loaded && this.state.searchTxt ) &&
						<div id="nof" className="nof"><FontAwesomeIcon icon={faSearch} id="ico" /> <h3 id="nor">No match found:(</h3></div>
					}
				</div>
			</div>
		)
	}
}

export default Admin

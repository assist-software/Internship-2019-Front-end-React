import React from 'react';
import '../Hero/Hero.js';
import '../Hero/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes, faUnlink } from '@fortawesome/free-solid-svg-icons'
import Movie from '../../Movie/Movie.js';
import api from "../../api-connection.js"

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			added:true
		}
	}

	addToWatchList(event)  {
		var arr = localStorage.getItem("watchList") === null ? [] : JSON.parse(localStorage.getItem("watchList"))
		if (arr.indexOf(this.state.id) === -1) {
			arr.push(this.state.id)
			localStorage.setItem('watchList', JSON.stringify(arr));
			this.props.updateCounter()
		} 
		this.isWatchListed(this.state.movie.id)
	}

	removeFromWatchList = () => {
	
		if (localStorage.getItem("watchList")) {	
			var arr = JSON.parse(localStorage.getItem("watchList"))
			if (arr.includes(this.state.id)) {
				for (var i = arr.length - 1; i >= 0; i--) {
					if (arr[i] === this.state.id) {
						arr.splice(i, 1);
						localStorage.setItem('watchList', JSON.stringify(arr));
						this.props.updateCounter()
						this.isWatchListed(this.state.movie.id)
					}
				}
			}
		}
	}

	isWatchListed = (id) => {
		var arr = localStorage.getItem("watchList") === null ? [] : JSON.parse(localStorage.getItem("watchList"))
		this.setState({ added: arr.indexOf(id) === -1})
	}

	componentDidMount = () => {
	
		fetch(api.lastMovie)
			.then(resp => resp.json())
			.then(data => {	
				this.isWatchListed(data.id)
				this.setState({ movie: data, id:data.id})
			})
	}

	render() {
		return (
			<div id="hero">
				{this.state.movie && 
					<div>
						<div id="moon">
							<div id="left">
								<h1 className="moon">{this.state.movie.title}</h1>
								<p className="p">{this.state.movie.description}</p>
								<a href={this.state.movie.trailerUrl}><button id="trailer">Watch trailer</button></a>
								{
									this.state.added ? <button id="list" onClick={this.addToWatchList.bind(this)}><span>+</span> Add to list</button>
									: <button id="list" className="added" onClick={()=>this.removeFromWatchList()}><FontAwesomeIcon icon={faUnlink}/> WatchList </button>
								}
							</div>

							<div id="img">
								<img className="img2" alt="img2" src={this.state.movie.coverUrl} onClick={() => (window.location.href='/movie?id='+this.state.id)}/>
							</div>
						</div>

						<div id="down">
							<a href="#recentAdded" ><FontAwesomeIcon icon={faChevronDown} /> </a>
						</div>
					</div>
				}
			</div>
		);
	}

}
export default Home

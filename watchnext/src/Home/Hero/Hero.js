import React from 'react';
import '../Hero/Hero.js';
import '../Hero/hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Movie from '../../Movie/Movie.js';
import api from "../../api-connection.js"

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	addToWatchList(event)  {
		this.isWatchListed(this.state.id)
		var arr = localStorage.getItem("watchList") === null ? [] : JSON.parse(localStorage.getItem("watchList"))
		if (arr.indexOf(this.state.id) === -1) {
			arr.push(this.state.id)
			localStorage.setItem('watchList', JSON.stringify(arr));
			this.props.updateCounter()
			this.setState(() => { return { notif: "Added" } })
		} else {
			this.setState(() => { return { notif: "Already In" } })
		}
	
	}

	isWatchListed = (id) => {
		var arr = localStorage.getItem("watchList") === null ? [] : JSON.parse(localStorage.getItem("watchList"))
		if (arr.indexOf(id) === -1) {
			this.setState({ added: true})
			return true
		}
		this.setState({ added: false})
		return false
	}

	componentDidMount = () => {
		fetch(api.lastMovie)
			.then(resp => resp.json())
			.then(data => {
				let movie = 
					<div>
						<div id="moon">
							<div id="left">
								<h1 className="moon">{data.title}</h1>
								<p className="p">{data.description}</p>
								<a href={data.trailerUrl}><button id="trailer">Watch trailer</button></a>
								{
									this.state.added ? <button id="list" onClick={this.addToWatchList.bind(this)}><span>+</span> Add to list</button>
									: <button id="list" className="added"><span>+</span>  Add to list </button>
								}
							</div>

							<div>
								<img className="img2" alt="img2" src={require('./image4.2.png')} />
							</div>
						</div>

						<div id="down">
							<a href="#recentAdded" ><FontAwesomeIcon icon={faChevronDown} /> </a>
						</div>
					</div>
		
				this.setState({ movie: movie, id:data.id})
			})
	}

	render() {
		return (
			
			<div id="hero">
			
				{this.state.movie && this.state.movie}
			</div>
		);
	}

}
export default Home

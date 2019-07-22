import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

class Movie extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			catNames :''
		}
	}


	componentDidMount = ()  => {	
		this.props.gen.map((id, index) => {
			{
				let url = "http://localhost:3001/category/" + id
				fetch(url)
					.then(resp => resp.json())
					.then(data => {
						this.setState((prev) => {
							return {
								catNames : prev.catNames + data.name  + " - "
							}
						})
					})
			}
		})
	}

	render() {
		return (
			<li>
				<div id="head">
					<img src={require('./profile.png')} />
					<div id="name">{this.props.title}</div>
				</div>
				<div id="date">
					{this.props.release.split("-")[2]}<span>/</span>
					{this.props.release.split("-")[1]}<span>/</span>
					{this.props.release.split("-")[0]}
				</div>
				<div id="cat">
					{this.state.catNames}
				</div>
				<div id="manage">
					<FontAwesomeIcon icon={faTrash} />
					<FontAwesomeIcon icon={faPen} />
				</div>
			</li>
		)
	}
}
export default Movie;

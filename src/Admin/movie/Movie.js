import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import api from "../../api-connection.js";

class Movie extends React.Component {
	constructor(props) {
		super(props)
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
					{this.props.gen.map((gen, index) => (index > 0 ? 
					<div key={index}><span> • </span>{gen}</div>
					:  <div key={index}>{gen}</div>))}
				</div>
				<div id="manage">
					<FontAwesomeIcon icon={faTrash} onClick={() => this.props.dm(this.props.id)} />
					<FontAwesomeIcon icon={faPen} />
				</div>
			</li>
		)
	}
}
export default Movie;
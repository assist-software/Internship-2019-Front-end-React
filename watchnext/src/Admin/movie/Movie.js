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
					<img src={(this.props.coverUrl == null || this.props.coverUrl == undefined || this.props.coverUrl == "")
						?"https://cdn.samsung.com/etc/designs/smg/global/imgs/support/cont/NO_IMG_600x600.png"
						:this.props.coverUrl}
					/>
					<div id="name">{this.props.title}</div>
				</div>
				<div id="date">
					{this.props.releaseDate.split("-")[2]}<span>/</span>
					{this.props.releaseDate.split("-")[1]}<span>/</span>
					{this.props.releaseDate.split("-")[0]}
				</div>
				<div id="cat">
					{this.props.category ? this.props.category.map((gen, index) => (index > 0 ? 
					<div key={index}><span> • </span>{gen}</div>
					:  <div key={index}>{gen}</div>)):<span>N/A</span>
				}
				</div>
				<div id="manage">
					<FontAwesomeIcon icon={faTrash} onClick={() => this.props.dm(this.props.id)} />
					<FontAwesomeIcon icon={faPen} onClick={() => this.props.edit(this.props)} />
				</div>
			</li>
		)
	}
}
export default Movie;
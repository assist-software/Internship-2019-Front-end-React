import React from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import api from "../../../api-connection.js"

class Timeline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comingNext: []
		}
	}

	componentDidMount = () => {
		fetch(api.movies)
			.then(resp => resp.json())
			.then(data => {
				let movies = data
				.map((item, index) => {
					return <VerticalTimelineElement
						key={index}
						className="verticalwork"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={
							item.releaseDate.split("-")[2]+"."+item.releaseDate.split("-")[1] + "." + item.releaseDate.split("-")[0]
						}
					>
						<img className="img1" alt="img1" src={item.coverUrl} />
						<div className="row">
							<h3 id="title" className="vertical-timeline-element-title">{item.title}</h3>
							<div className="al">
							<p style={{ color: '#F5044C', fontFamily: 'Campton !important'  }} className="imdb_t">{item.imdbScore}</p>
							<p className="cat">
								{item.category.map((gen, index) => (index > 0 ?
									<div key={index}><span> • </span>{gen}</div>
									: <div key={index}>{gen}</div>))}
							</p>
							</div>
						</div>
					</VerticalTimelineElement>
				})
				
				let sortebyDate = movies
				sortebyDate.sort(function (a, b) {
			
					var dateA = a.props.icon
					var dateB = b.props.icon
			
					if (dateA < dateB) {
					return -1;
					}
					if (dateA > dateB) {
					return 1;
					}
			
					return 0;
				});
				this.setState({ comingNext: sortebyDate })
			})


		

			  
	}

	render() {
		return <VerticalTimeline className="vertical-element-content" layout={'2-columns'}>{this.state.comingNext}</VerticalTimeline>
	}
}
export default Timeline;

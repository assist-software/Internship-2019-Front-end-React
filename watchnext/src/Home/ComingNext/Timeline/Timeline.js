import React from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			comingNext: []
		}
	}

	componentDidMount = () => {
		let url = "http://localhost:3001/movies"
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				let movies = data.map(item => {
					return <VerticalTimelineElement
						className="verticalwork"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={"20.03.2019"}
					>
						<img className="img1" alt="img1" src={require('./image1.png')} />
						<div className="row">
							<h3 id="title" className="vertical-timeline-element-title">{item.title}</h3>
							<p style={{ color: '#F5044C', fontFamily: 'Campton' }} className="imdb_t">8,3</p>
							<p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
						</div>
					</VerticalTimelineElement>
				})
				this.setState({ comingNext: movies })
			})
	}

	render() {
		return <VerticalTimeline className="vertical-element-content" layout={'2-columns'}>{this.state.comingNext}</VerticalTimeline>
	}
}
export default Timeline;

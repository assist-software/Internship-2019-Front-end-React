import React from 'react';
import './timeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'


class Timeline extends React.Component {
    constructor() {
      super()   
    }
    
    render() {
      return (
        <VerticalTimeline className="vertical-element-content" layout={ '2-columns' }>
       
        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"20.03.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
          <div className="row">
          <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C', fontFamily: 'Campton'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"17.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
         <div className="row">
         <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"28.05.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
          <div className="row">
          <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="verticalwork"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={"07.06.2019"}
        >
          <img className="img1" alt="img1" src={require('./image1.png')}/>
          <div className="row">
          <h3 id="title" className="vertical-timeline-element-title">Godzilla Kind of the Monsters</h3>
              <p style={{color: '#F5044C'}} className="imdb_t">8,3</p>
              <p className="vertical-timeline-element-subtitle"><span>Action • Drama </span></p>
          </div>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
           
      )
    }

}
export default Timeline;

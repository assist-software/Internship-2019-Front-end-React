import React from 'react';
import '../ComingNext/comingNext.css';
import Dropdown from '../../dropdown/Dropdown';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import MovieCart from '../../movieCart/MovieCart';
import comingNextData from '../../data/comingNextData';

class ComingNext extends React.Component {
  state = {
    genre:'Action',
    genres: [
        {
            id: 0,
            title: 'Action',
            selected: false,
            key: 'location'
        },
        {
          id: 1,
          title: 'Comedy',
          selected: false,
          key: 'location'
        },
        {
          id: 2,
          title: 'Thriler',
          selected: false,
          key: 'location'
        },
        {
          id: 3,
          title: 'Romance',
          selected: false,
          key: 'location'
        }
      ],
    startDate: new Date(),
    date:'',
    dateOpen:false,
    comingNext:comingNextData
}
    constructor() {
        super()
        this.state = {
            genre:'Action',
            genres: [
                {
                    id: 0,
                    title: 'Action',
                    selected: false,
                    key: 'location'
                },
                {
                  id: 1,
                  title: 'Comedy',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'Thriler',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Romance',
                  selected: false,
                  key: 'location'
                }
              ],
            startDate: new Date(),
            date:'',
            dateOpen:false,
            comingNext:comingNextData
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateGenre = this.updateGenre.bind(this)
        this.dateChange = this.dateChange.bind(this)
        this.dateSelect = this.dateSelect.bind(this)
    }
    
    handleChange(event){
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    dateChange(date){
      this.setState({
        startDate: date,
        dateOpen: false
      });
    }

    dateSelect(date){
      this.setState((prev)=>{
        return {
          date: date,
          dateOpen: true
        }
      })
    }

    updateGenre(g){
      this.setState(()=>{
        return{
          genre:g
        }
      })
    }

    btnDateClick = ()=>{
      this.setState((prev)=>{
        return {
          dateOpen: !prev.dateOpen
        }
      })
    }

    render() {
      const comingMovies = this.state.comingNext.map(item => <MovieCart key={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} />)
      return (
        <div id="comingNext">
          <div id="container">
              <div id="top">
                  <h1>See what movies are<br />coming next month</h1>
                  <div id="filter">
                      <h3>Filter by</h3>       
                      <Dropdown list={this.state.genres} gen={this.state.genre} ug={this.updateGenre} />
                      <button id="date" onClick={this.btnDateClick}> 
                      <FontAwesomeIcon icon={faCalendar} /> Any Date <FontAwesomeIcon icon={this.state.dateOpen?faChevronDown:faChevronLeft} />
                      </button>
                      <div id="dp">
                        <DatePicker selected={this.state.date} onSelect={this.dateChange} onChange={this.dateSelect}
                      />
                      </div>
                  </div>
              </div>
              <div id="comingList">{comingMovies}</div>
          </div>
        </div>
      )    
  }
}

export default ComingNext

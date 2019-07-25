import React from 'react';
import '../ComingNext/comingNext.css';
import Dropdown from '../../dropdown/Dropdown';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faTh } from '@fortawesome/free-solid-svg-icons'
import MovieCart from '../../movieCart/MovieCart';
import Timeline from './Timeline/Timeline';
import api from "../../api-connection.js";

class ComingNext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      genreName: '',
      genre: 'Action',
      genres: [],
      startDate: new Date(),
      date: '',
      dateOpen: false,
      isListDisplayed: true
    }
  }

  dateChange = (date) => {
    this.setState({
      startDate: date,
      dateOpen: false
    });
  }

  dateSelect = (date) => {
    this.setState({
      date: date,
      dateOpen: true
    })
  }

  updateGenre = (genre) => {
    this.setState({ genre })
    this.getMovies(genre)
  }

  btnDateClick = () => {
    this.setState((prev) => {
      return {
        dateOpen: !prev.dateOpen
      }
    })
  }

  componentDidMount = () => {
    this.getMovies('Action')
    fetch(api.categories, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        genres: data.map((item) => {
          return { "id": item.id, title: item.name }
        })
      })
    })
  }

  getMovies = (category) => {
    let categoreis = {}
    fetch(api.catMovies + category, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => {
      let movies = data.map(item =>
        <MovieCart
          key={item.id}
          updateCounter={() => this.props.updateCounter()}
          id={item.id} title={item.title}
          release={item.releaseDate}
          gen={item.category}
          img={item.coverUrl}
          imdbScore={item.imdbScore}
        />)
      this.setState({ comingNext: movies })
    })
  }

  swithcList = (val) => {
    this.setState({ list: val })
  }

  render() {
    const { genre, genres } = this.state;
    return (
      <div id="comingNext">
        <div id="container">

          <div id="top">
            <h1>See what movies are<br />coming next month</h1>

            <div id="filter">
              <Dropdown list={genres} gen={genre} ug={this.updateGenre} num={true} />

              <button id="date" onClick={this.btnDateClick}>
                <FontAwesomeIcon icon={faCalendar} /> Any Date <FontAwesomeIcon icon={this.state.dateOpen ? faChevronDown : faChevronLeft} />
              </button>

              <div id="dp">
                <DatePicker
                  selected={this.state.date} onSelect={this.dateChange} onChange={this.dateSelect}
                  popperPlacement="botom-start"
                  popperModifiers={{
                    flip: {
                      enabled: false
                    },
                    preventOverflow: {
                      enabled: true,
                      escapeWithReference: false
                    }
                  }}
                />
              </div>

              <div id="view">
                <button onClick={() => this.swithcList(false)}><FontAwesomeIcon icon={faTh} /></button>
                <button onClick={() => this.swithcList(true)}><FontAwesomeIcon icon={faList} /></button>
              </div>

            </div>

          </div>

          <div id="comingList">
            {!this.state.list ? this.state.comingNext : <Timeline />}
          </div>

        </div>
      </div>
    )
  }
}

export default ComingNext

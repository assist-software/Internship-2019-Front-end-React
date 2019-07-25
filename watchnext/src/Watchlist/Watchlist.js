import React from 'react';
import '../Watchlist/watchlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../dropdown/Dropdown';
import MovieCart from '../movieCart/MovieCart';
import api from "../api-connection.js";
import { array } from 'prop-types';

class Watchlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      watchListIndex: !localStorage.getItem("watchList") === null ? JSON.parse(localStorage.getItem("watchList")).reverse() : [],
      comingMovies: new Array(),
      comingMoviesList: new Array(),
      selected: 'Latest Added',
      loaded: false,
      movieName: '',
      searchTxt: '',
      options: [{
        id: 0,
        title: 'Latest Added'
      },
      {
        id: 1,
        title: 'Name'
      },
      {
        id: 2,
        title: 'Release Date'
      }
      ]
    }
  }

  load = (lastAdded) => {
    console.log("aaaa")
    this.setState(() => {
      return {
        watchListIndex: lastAdded ? JSON.parse(localStorage.getItem("watchList")).reverse() : JSON.parse(localStorage.getItem("watchList")),
        comingMovies: new Array(),
        comingMoviesList: new Array()
      }
    })

    var movies_id = lastAdded ? JSON.parse(localStorage.getItem("watchList")).reverse() : JSON.parse(localStorage.getItem("watchList"))

    for (var i = 0; i < movies_id.length; i++) {
      fetch(api.movies + movies_id[i])

      .then(resp => resp.json())
      .then(item => {
        this.setState((prev) => {
          return {
            loaded: true,
            comingMovies: prev.comingMovies.concat(
              <MovieCart refreshMovieList={() => this.load()} 
              updateCounter={() => this.props.updateCounter()} 
              key={item.id} id={item.id} 
              title={item.title} 
              release={item.releaseDate}
              gen={item.category} 
              img={item.coverUrl} 
              imdbScore={item.imdbScore}
              page='watchlist' />),
            comingMoviesList: prev.comingMovies.concat(
              <MovieCart refreshMovieList={() => this.load()} 
              updateCounter={() => this.props.updateCounter()}
              key={item.id} id={item.id} 
              title={item.title} 
              release={item.releaseDate} 
              gen={item.category} 
              img={item.coverUrl} 
              imdbScore={item.imdbScore}
              page='watchlist' />)
          }
        })
      })
    }
  }

  selectOpt = (opt_id) => {
    if (opt_id == "Name") {
      let sortedByName = this.state.comingMoviesList
      sortedByName.sort(function (a, b) {

        var nameA = a.props.title.toLowerCase()
        var nameB = b.props.title.toLowerCase()

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      this.setState(() => {
        return {
          comingMoviesList: sortedByName,
          loaded: false
        }
      })
    }

    if (opt_id == "Latest Added") {
      this.load(true)
    }

    if (opt_id == "Release Date") {
      let sortebyDate = this.state.comingMoviesList
      sortebyDate.sort(function (a, b) {

        var dateA = a.props.release
        var dateB = b.props.release

        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }

        return 0;
      });
      this.setState(() => {
        return {
          comingMoviesList: sortebyDate,
          loaded: false
        }
      })
    }

  }

  search = (event) => {
    const movieName = event.target.value
    this.setState({searchTxt: movieName})
    if (movieName) {
      let movies = this.state.comingMovies
        .filter((item) => item.props.title.toLowerCase().includes(movieName.toLowerCase()))
      this.setState({comingMoviesList: movies})
    } else {
      this.setState({comingMoviesList: this.state.comingMovies})
    }
  }
  
  // componentDidMount = () => this.load()

  componentWillMount = () => {
    if (localStorage.getItem("watchList") === null ){
      localStorage.setItem("watchList","[]")
    }
  }

  render() {
    return (
      <div id="watchList">
        <h1 id="title">Welcome to your<br />Watchlist page.</h1>

        <div id="wctrl">
          <div id="ctrl-left">
            <input type="text" placeholder="Search a movie..." id="searchamov" onChange={this.search.bind(this)} />
            <FontAwesomeIcon icon={faSearch} id="ico" />
          </div>

          <div id="ctrl-right">
            <span>Sort by</span>
            <Dropdown list={this.state.options} gen={this.state.selected} ug={this.selectOpt} />
          </div>
        </div>

        <div id="comingList">{this.state.comingMoviesList}</div>

        {
          (this.state.comingMovies.length>0 && this.state.comingMoviesList.length == 0 && this.state.loaded && this.state.searchTxt ) &&
          <div id="nof"><FontAwesomeIcon icon={faSearch} id="ico" /> <h3 id="nor">No match found:(</h3></div>
        }
        {
          this.state.comingMovies.length==0 &&  <div id="nof"><h3 id="nor">:(</h3><h3 id="nor">Empty WatchList</h3></div>
        }
      </div>
    )
  }

}

export default Watchlist
import React from 'react';
import '../Watchlist/watchlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../dropdown/Dropdown';
import MovieCart from '../movieCart/MovieCart';
import comingNextData from '../data/comingNextData';

class Watchlist extends React.Component {
  constructor() {
    super()
    this.state = {
      comingMovies: comingNextData.map(item => <MovieCart id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} />),
      selected: 'Last Added',
      options: [{
            id: 0,
            title: 'Last Added',
        }
      ]
    }
  }
  
  updateOpt = (g) => {
    this.setState(()=>{
      return {
        selected:g
      }
    })
  }

  search = (event) => {
    const movieName = event.target.value
    if (movieName){
      this.setState(()=>{
        return {
          comingMovies: comingNextData.map(item => {
            if(item.title.toLowerCase().includes(movieName.toLowerCase())){
              return  <MovieCart id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} />
            }
          }),
        }
      })
    }else{
      this.setState(()=>{
        return {
          comingMovies: comingNextData.map(item => <MovieCart id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} />),
        }
      })
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
            <Dropdown list={this.state.options} gen={this.state.selected} ug={this.updateOpt} />
          </div>
        </div>
        <div id="comingList">{this.state.comingMovies}</div>
      </div>
    )    
  }
}

export default Watchlist

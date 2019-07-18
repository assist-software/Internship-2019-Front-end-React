import React from 'react';
import '../Watchlist/watchlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../dropdown/Dropdown';
import MovieCart from '../movieCart/MovieCart';

class Watchlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comingMovies: new Array(),
      selected: 'Last Added',
      options: [{
        id: 0,
        title: 'Last Added',
        }
      ]
    }
  }
  
  componentDidMount = () =>{
    this.getMovieList()
  }

  getMovieList = (movieName) => {
    var movies_id = JSON.parse(localStorage.getItem("watchList"))
    this.setState({comingMovies:new Array()})
    
    for (var i = 0; i < movies_id.length; i++) {
      let url = "http://localhost:3001/movies/" + movies_id[i]
      fetch(url)
        .then(resp => resp.json())
        .then(item => {
          this.setState((prev) => {   
            return {
              comingMovies:prev.comingMovies.concat(<MovieCart refreshMovieList={()=>this.getMovieList()} updateCounter={()=>this.props.updateCounter()} key={item.id} id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} page='watchlist'/>)
            }
        })        
      })
    }
    this.setState({update:true})
  }

  sort = () => {
    let x = this.state.comingMovies
    console.log(x.length)
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
      this.getMovieList(movieName)
    }else{
      this.getMovieList()
    }
  }
  
  render() {
  this.sort()
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

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
      watchListIndex: JSON.parse(localStorage.getItem("watchList")).reverse(),
      comingMovies: new Array(),
      comingMoviesList: new Array(),
      selected: 'Latest Added',
      loaded:false,
      movieName:'',
      options: [{
        id: 0,
        title: 'Latest Added',
        },
        {
          id: 1,
          title: 'Name',
        },
        {
          id: 2,
          title: 'Release Date'
        }
      ]
    }
  }
  
  
  componentDidMount = () =>{
    this.load(true)
    this.getMovieList()
  }

  load = (lastAdded) => {
    this.setState(() => {   
      return {
        watchListIndex: lastAdded ?JSON.parse(localStorage.getItem("watchList")).reverse():JSON.parse(localStorage.getItem("watchList")),
        comingMovies:new Array(),
        comingMoviesList:new Array()
      }
    }) 

    var movies_id = lastAdded ?JSON.parse(localStorage.getItem("watchList")).reverse():JSON.parse(localStorage.getItem("watchList"))

    for (var i = 0; i < movies_id.length; i++) {
      let url = "http://localhost:3001/movies/" + movies_id[i]
      fetch(url)
        .then(resp => resp.json())
        .then(item => {
          this.setState((prev) => {   
            return {
              loaded:true,
              comingMovies:prev.comingMovies.concat(<MovieCart refreshMovieList={()=>this.load()} updateCounter={()=>this.props.updateCounter()} key={item.id} id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} page='watchlist'/>),
              comingMoviesList:prev.comingMovies.concat(<MovieCart refreshMovieList={()=>this.load()} updateCounter={()=>this.props.updateCounter()} key={item.id} id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} page='watchlist'/>)
            }
          })        
      })
    }

    // if(this.state.movieName != ''){
    //   console.log("search " + this.state.movieName)
    //   this.getMovieList(this.state.movieName)
    // }

  }

  getMovieList = (movieName) => {
    if(movieName){
      let mov = this.state.comingMovies
      .filter((item) => item.props.title.toLowerCase().includes(movieName.toLowerCase()))
      .map((item) => item)
      this.setState({comingMoviesList:mov})  
    }else{
      this.setState(() => {   
        return {
          comingMoviesList:this.state.comingMovies
        }
      })  
    }
  }

  updateOpt = (gen) => {
    if(gen == "Name"){ 
      let sortedByName = this.state.comingMoviesList
      sortedByName.sort(function(a, b) {
       
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
          comingMoviesList:sortedByName,
          loaded:false
        }
      })  
    }

    if(gen == "Latest Added"){
      this.load(true)
    }

    if(gen == "Release Date"){
      let sortebyDate = this.state.comingMoviesList
      sortebyDate.sort(function(a, b) {
       
        var dateA = a.props.release
        var dateB = b.props.release
     
        if (dateA < dateB) {
          return -1;
        }
        if (dateA > dateB) {
          return 1;
        }
      
        return 0;
      });
      this.setState(() => {   
        return {
          comingMoviesList:sortebyDate,
          loaded:false
        }
      }) 
    }
    console.log(this.state.comingMoviesList)
  }
  
  search = (event) => {
    const movieName = event.target.value
    this.getMovieList(movieName && movieName)
    this.setState({movieName:event?movieName:''})
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
        <div id="comingList">{this.state.comingMoviesList}</div>
        {(this.state.comingMoviesList.length == 0 && this.state.loaded) && 
        <div id="nof"><FontAwesomeIcon icon={faSearch} id="ico" /> <h3 id="nor">No results found:(</h3></div>
        }
      </div>
    )    
  }

}

export default Watchlist
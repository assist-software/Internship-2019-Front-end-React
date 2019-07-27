import React from 'react';
import '../Categories/categories.css';
import Dropdown from '../dropdown/Dropdown';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCart from '../movieCart/MovieCart';
import '../movieCart/movieCart.css';
import api from '../api-connection.js';

  class Categories extends React.Component {
  
    constructor(props){
      super(props)
      this.state={
        loaded: false,
        genreName: '',
        genre: 'Action',
        genres: [],
        isListDisplayed: true
      }
    }
    
    updateGenre = (genre) => {
      this.setState({ genre })
      this.getMovies(genre)
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
        this.setState({ categorymov: movies })
      })
    }

    swithcListc = (val) => {
      this.setState({ list: val })
    }
  
    render() {
      const { genre, genres } = this.state;
        return (   
        <div id="categorypage">

            <div id="titlelist">
              <h1 id="title">All movies</h1>
              <div id="filter">
                <Dropdown list={genres} gen={genre} ug={this.updateGenre} num={true} />
                {this.state.list}
              </div>
            </div>

          <div id="afisarefilme">
            {this.state.categorymov}
          </div>
            
        </div>
    );
  }
}

  export default Categories
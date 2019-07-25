import * as React from 'react';
import '../RecentAdded/recentAdded.css';
import MovieCart from '../../movieCart/MovieCart';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowRight from '../RecentAdded/right.png';
import arrowLeft from "../RecentAdded/left.png"
import api from "../../api-connection.js"

class PrevArrow extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className="custom-arrow prev-arrow-custom" onClick={onClick}>
        <img src={arrowLeft} alt="right-icon"/>
      </div>
    );  
  }
}

class NextArrow extends React.Component {
  render(){
    const { onClick } = this.props;
    return (
      <div className="custom-arrow next-arrow-custom" onClick={onClick}>
        <img src={arrowRight} alt="left-icon"/>
      </div>
    );  
  }
}

class RecentAdded extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      oldSlide: 0,
      activeSlide: 0,
      activeSlide2: 0
    }
  }

  componentDidMount(){
    fetch(api.movies)
      .then(resp => resp.json())
      .then(data => {
        let movies = data.map(item => 
          <MovieCart 
          updateCounter={()=>this.props.updateCounter()} 
          key={item.id} id={item.id} 
          title={item.title} 
          release={item.releaseDate} 
          gen={item.category} 
          img={item.coverUrl} 
          imdbScore={item.imdbScore}
          />)
        this.setState({recentAddedMovies:movies})
      })
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) =>
      this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };

    return (   
      <div id="recentAdded">
          {this.state.recentAddedMovies &&
            <div id="left">Recent added movies <h4>(
              {
                this.state.activeSlide+4 > this.state.recentAddedMovies.length
                ?this.state.recentAddedMovies.length
                :this.state.activeSlide+4
              }
              /{this.state.recentAddedMovies.length})</h4>
            </div>
          }
          <div id="slider">
              <Slider {...settings}>
                {this.state.recentAddedMovies}
              </Slider>
          </div>
      </div>

    );
  }
}
  
export default RecentAdded
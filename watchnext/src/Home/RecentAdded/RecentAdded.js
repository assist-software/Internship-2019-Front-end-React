import * as React from 'react';
import '../RecentAdded/recentAdded.css';
import MovieCart from '../../movieCart/MovieCart';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import arrowRight from '../RecentAdded/right.png';
import arrowLeft from "../RecentAdded/left.png"

class PrevArrow extends React.Component {
  render(){
    const {onClick} = this.props;
  return (
    <div className="custom-arrow prev-arrow-custom" onClick={onClick}>
      <img src={arrowLeft} alt="right-icon"/>
    </div>
  );  
}
}

class NextArrow extends React.Component {
  render(){
    const {onClick} = this.props;
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
    }
  }

  componentDidMount(){
    let url = "http://localhost:3001/movies"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let movies = data.map(item => <MovieCart updateCounter={()=>this.props.updateCounter()} id={item.id} title={item.title} release={item.releaseDate} gen={item.gen} img={item.img} />)
        this.setState({recentAddedMovies:movies})
      })
  }
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    
    return (   
      <div id="recentAdded">
          <div id="left">Recent added movies <h4>(4/10)</h4></div>
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
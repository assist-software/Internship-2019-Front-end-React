import React from 'react';
import '../Categories/categories.css';
import '../movieCart/MovieCart';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCart from '../movieCart/MovieCart';

  
  class PrevArrow extends React.Component {
    render(){
      const {onClick} = this.props;
    return (
      <div className="custom-arrow prev-arrow-custom" onClick={onClick}>
        <img className="img5" alt="img5" src={require('./left.png')}/>
      </div>
    );  
  }
  }
  
  class NextArrow extends React.Component {
    render(){
      const {onClick} = this.props;
    return (
      <div className="custom-arrow next-arrow-custom" onClick={onClick}>
        <img className="img6" alt="img6" src={require('./right.png')}/>
      </div>
    );  
    }
  }

  class Categories extends React.Component {
  
    constructor(props){
      super(props)
      this.state={
        oldSlide: 0,
        activeSlide: 0,
        activeSlide2: 0
      }
    }
  
    componentDidMount(){
      let url = "http://localhost:3001/movies"
      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          let movies = data.map(item => <MovieCart id={item.id} title={item.title}  img={item.img} />)
          this.setState({categoryMovies:movies})
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
        <div id="category">
            {this.state.categoryMovies &&<div id="left">Comedy<h4>(
              {this.state.activeSlide>this.state.categoryMovies.length?this.state.categoryMovies.length:this.state.activeSlide}/{this.state.categoryMovies.length})</h4>
              </div>}
            <div id="slider">
                <Slider {...settings}>
                    {this.state.categoryMovies}
                </Slider>
            </div>
        </div>
  
      );
    }
  }
    
  export default Categories
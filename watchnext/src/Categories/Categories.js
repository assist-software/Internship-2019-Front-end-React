import React from 'react';
import '../Categories/categories.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCart from '../movieCart/MovieCart';
import '../movieCart/movieCart.css';

  
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
            let movies = data.map(item => <MovieCart updateCounter={()=>this.props.updateCounter()} key={item.id} id={item.id} title={item.title} release={item.releaseDate} img={item.cover} />)
            this.setState({categorymov:movies})
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
        <div id="categorypage">
          <div id="comedy">
            {this.state.categorymov &&
              <div id="leftcateg"><h2>Comedy</h2><h4>(
                {
                  this.state.activeSlide+4 > this.state.categorymov.length
                  ?this.state.categorymov.length
                  :this.state.activeSlide+4
                }
                <span>/</span>{this.state.categorymov.length})</h4>
              </div>
            }
            <div id="slidercateg">
                <Slider {...settings}>
                  {this.state.categorymov}
                </Slider>
            </div>
            </div>

            <div id="action">
            {this.state.categorymov &&
              <div id="leftcateg"><h2>Action</h2><h4>(
                {
                  this.state.activeSlide+4 > this.state.categorymov.length
                  ?this.state.categorymov.length
                  :this.state.activeSlide+4
                }
                <span>/</span>{this.state.categorymov.length})</h4>
                <div id="description">
                  <h1>{this.props.title}</h1>
                  </div>
              </div>
            }
            <div id="slidercateg">
                <Slider {...settings}>
                  {this.state.categorymov}
                </Slider>
            </div>
            </div>
        </div>

    );
  }
}

      
  export default Categories
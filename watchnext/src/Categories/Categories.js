import React from 'react';
import '../Categories/categories.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

  
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
      }
    
    render() {
  
      
  
      return (   
        <div id="category">
         
        </div>
  
      );
    }
  }
      
  export default Categories
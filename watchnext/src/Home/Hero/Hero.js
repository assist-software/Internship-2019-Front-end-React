import React from 'react';
import '../Hero/Hero.js';
import '../Hero/hero.css';


class Home extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
        <div id="hero">
            <div id="moon">
                <div id="left">
                    <h1 className="moon">Moonlight {this.props.name}</h1>
                    <p className="p">A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.</p>
                    <button id="trailer" href="#">Watch trailer</button>
                    <button id="list" href="#"><span>+</span> Add to list</button>
                    
                </div>
                <div>
                     <img className="img2" alt="img2" src={require('./image4.2.png')}/>
                </div>
            </div>
            <i class="fas fa-angle-down"></i>
         
        </div>
             
        );  
    }

}
export default Home

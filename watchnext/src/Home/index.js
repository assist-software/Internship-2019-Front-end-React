import React from 'react';
import '../Home/index.css';


class Home extends React.Component {
    constructor() {
        super()
    }
    
    render() {
        return (
        <div>
            <div id="moon">
                <div id="left">
                    <h1 className="moon">Moonlight {this.props.name}</h1>
                    <p className="p">A chronicle of the childhood, adolescence and burgeoning adulthood of a young, African-American, gay man growing up in a rough neighborhood of Miami.</p>
                </div>
                <div>
                     <img className="img2" src={require('./image4.2.png')}/>
                </div>
            </div>
        </div>
             
        );  
    }

}
export default Home

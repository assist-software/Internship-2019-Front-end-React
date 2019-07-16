import React from 'react';
import '../movieCart/movieCart.css';

class MovieCart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            genres:props.gen.map((gen,index) =>  (index>0 ? " • ":" ")+ gen )  ,
            selected:false
        }
    }

     addToWatchList(event){
        var arr = localStorage.getItem("watchList") === null ? new Array() : JSON.parse(localStorage.getItem("watchList") )
        if (arr.indexOf(this.props.id) === -1) {
            arr.push(this.props.id)
            localStorage.setItem('watchList', JSON.stringify(arr));
         }
        this.setState(()=>{
            return {
                selected:true
            }
        })
        console.log(localStorage.getItem('watchList'))
    }

    render() {
        return (
            <div className="movieCart">
                <img src={require("../movieCart/img.png")}/>
                <div id="ctrl">
                    <button className="test" onClick={this.addToWatchList.bind(this)}>Add to watchlist</button>
                    <div className='rate'>8.3</div>
           
                </div>

                <div id="description"></div>
                <h1>{this.props.title}</h1>

                <div className="info">
                    <div id="rd">Release date: <h4>{this.props.release}</h4></div>
                    {this.state.genres}
                </div>
            </div>
        )
    }
}

export default MovieCart

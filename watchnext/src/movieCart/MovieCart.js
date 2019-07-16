import React from 'react';
import '../movieCart/movieCart.css';

function MovieCart(props) {
    const genres = props.gen.map((gen,index) =>  (index>0 ? " • ":" ")+ gen )  
    return (
        <div className="movieCart">
            <img src={require("../movieCart/img.png")}/>
            <div id="ctrl">
                <button>Add to watchlist</button>
                <div className='rate'>8.3</div>
            </div>

            <div id="description"></div>
            <h1>{props.title}</h1>

            <div className="info">
                <div id="rd">Release date: <h4>{props.release}</h4></div>
                {genres}
            </div>
        </div>
    )
}

export default MovieCart

import React from 'react';
import '../Movie/movie.css';
import api from "../api-connection.js"
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    addToWatchList(id) {
        var arr = localStorage.getItem("watchList") === null ? [] : JSON.parse(localStorage.getItem("watchList"))
        if (arr.indexOf(id) === -1) {
            arr.push(id)
            localStorage.setItem('watchList', JSON.stringify(arr));
            window.location.reload();
        }
    }

    componentDidMount = () => {
        let id = window.location.href.match(/\id=(\d+)$/) ? window.location.href.match(/\id=(\d+)$/)[1] : null

        if (id == null) {
            window.location.href = '/home'
            return
        }

        fetch(api.movies + id)

            .then(resp => resp.json())
            .then(data => {
                if (data == null) {
                    window.location.href = '/home'
                }
                this.setState((prev) => {
                    return {
                        loaded: true,
                        movie: data
                    }
                })
            })
    }

    render() {
        const { movie } = this.state

        return (
            <div id="moovie">
                {this.state.movie && <div>
                    <div id="containermov">
                        <div id="left">
                            <img id="imgmov" alt="imgmov" src={movie.coverUrl} />

                            <a href={movie.trailerUrl} target="blank" id="playt"><div>

                                <img id="playbut" alt="" src={require('./playbut.png')} />
                                <p>Play Trailer</p>

                            </div></a>
                            <div id="source">
                                <a href={movie.originalSourceUrl} id="p" target="_blank">See orginal content</a>
                            </div>
                        </div>
                        <div id="right">
                            <div id="title">
                                <h1>{movie.title} <img id="imdb" alt="imdb" src={require('./imdb.png')} /></h1>
                            </div>
                            <div id="genmov"><p>{movie.category.map((gen, index) => (index > 0 ? " • " : " ") + gen)} </p></div>
                            <div id="descr">
                                <p>{movie.description}</p></div>
                            <div><button id="addwatchmov" onClick={() => { this.addToWatchList(movie.id) }}>Add to watchlist</button></div>
                            <div id="bott">
                                <div id="staff">
                                    <div>
                                        <p id="st">Directors</p>
                                        <p id="dr">Chris Addison</p>
                                    </div>
                                    <div>
                                        <p id="stw">Writers</p>
                                        <p id="drw">Stanley Shapiro (screenplay by), Paul Henning (screenplay by) <span>•</span> <a id="stafff" href="">5 more credits</a></p>
                                    </div>
                                    <div>
                                        <p id="sts">Stars</p>
                                        <p id="drs">Anne Hathaway, Rebel Wilson, Alex Sharp, Timothy Simons <span>•</span> <a id="stafff" href="">See full cast & crew</a></p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="containerfoto">
                        <div id="fotto">
                            <h1>Photos</h1>
                            <div id="poze">
                                <div id="poza1"><img id="img1" alt="imgmov" src={require('./image1.png')} /></div>
                                <div id="poza2"><img id="img2" alt="imgmov" src={require('./image2.png')} /></div>
                                <div id="poza3"><img id="img3" alt="imgmov" src={require('./image3.png')} /></div>
                                <div id="poza4"><img id="img4" alt="imgmov" src={require('./image4.png')} /></div>
                                <div id="poza5"><img id="img5" alt="imgmov" src={require('./image5.png')} /></div>
                                <div id="poza6"><img id="img6" alt="imgmov" src={require('./image6.png')} /></div>
                            </div>
                        </div>
                    </div></div>
                }
            </div>

        )
    }
}

export default Movie

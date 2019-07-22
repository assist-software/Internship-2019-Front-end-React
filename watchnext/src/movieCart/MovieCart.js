import React, {Component} from 'react';
import '../movieCart/movieCart.css';

class MovieCart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            genres: props.gen.map((gen, index) => (index > 0 ? " • " : " ") + gen),
            selected: false,
            notif: "Added"
        }
    }

    addToWatchList(event) {
        var arr = localStorage.getItem("watchList") === null ? new Array() : JSON.parse(localStorage.getItem("watchList"))
        if (arr.indexOf(this.props.id) === -1) {
            arr.push(this.props.id)
            localStorage.setItem('watchList', JSON.stringify(arr));
            console.log(localStorage.getItem('watchList'))
            this.props.updateCounter()
            this.setState(() => { return { notif: "Added" } })
        } else {
            this.setState(() => { return { notif: "Already In" } })
        }
        this.setState(() => {
            return {
                selected: true
            }
        })
        setTimeout(function () {
            this.setState(() => {
                return {
                    selected: false
                }
            })
        }.bind(this), 3000)

    }

    removeFromWatchList() {
        if (localStorage.getItem("watchList")) {
            var arr = JSON.parse(localStorage.getItem("watchList"))
            if (arr.includes(this.props.id)) {
                for (var i = arr.length - 1; i >= 0; i--) {
                    if (arr[i] === this.props.id) {
                        arr.splice(i, 1);
                        localStorage.setItem('watchList', JSON.stringify(arr));
                        this.props.updateCounter()
                        this.props.refreshMovieList()
                    }
                }
            }
        }
    }

    render() {
        return (
            <div className="movieCart">
                <img src={require("../movieCart/img.png")} />
                <div id="ctrl">
                    {this.props.page == "watchlist" ?
                        <button className="test" onClick={this.removeFromWatchList.bind(this)}>Remove</button>
                        :
                        <button className="test" onClick={this.addToWatchList.bind(this)}>Add to watchlist</button>
                    }
                    <div className='rate'>8.3</div>
                    {this.state.selected && <div id="notif">{this.state.notif}</div>}
                </div>

                <div id="description"></div>
                <h1>{this.props.title}</h1>

                <div className="info">
                    <div id="rd">Release date: <h4>{
                        this.props.release.split('-')[2] + "/" + this.props.release.split('-')[1] + "/" + this.props.release.split('-')[0]
                    }</h4></div>
                    {this.state.genres}
                </div>
            </div>
        )
    }
}

export default MovieCart
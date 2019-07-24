import React from 'react'
import './dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Scrollbars } from 'react-custom-scrollbars'
import api from "../api-connection.js"

class Dropdown extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.gen,
      catCount: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        listOpen: !prevState.listOpen
      }
    })
  }

  genreSelect(genre) {
    this.setState(() => {
      return {
        listOpen: false,
        headerTitle: genre.title
      }
    })
    this.props.ug(genre.id)
 
  }

  getMovies = () => {
    fetch(api.categories)
      .then(resp => resp.json())
      .then(data => {
        data.map(item => {
          fetch(api.catMovies + item.name)
            .then(resp => resp.json())
            .then(data => {
              let movies = data.map(item => item)
              this.setState((prev) => {catCount: prev.catCount[item.name] = movies.length }
            )
        })
      })
    })
  }

  componentDidMount = () => {
    this.props.ug(this.state.headerTitle)
    if(this.props.num)
      this.getMovies()
  }

  render() {
    return (
      <div id="dropDown">
        <div name="genre" id="genre">
          <button onClick={this.handleClick}>{this.state.headerTitle}<FontAwesomeIcon icon={this.state.listOpen ? faChevronDown : faChevronLeft} /></button>
        </div>
        {this.state.listOpen && <div id="list">
          <ul>
            <Scrollbars style={{ height: 175 }}>
              {this.props.list.map(item => <li onClick={() => this.genreSelect(item)} key={item.id}>{item.title} {this.props.num && "(" + this.state.catCount[item.title]+ ")"}</li>)}
            </Scrollbars>
          </ul>
        </div>}
      </div>
    )
  }
}

export default Dropdown
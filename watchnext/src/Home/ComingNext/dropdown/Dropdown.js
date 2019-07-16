import React from 'react';
import '../dropdown/dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

class Dropdown extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          listOpen: false,
          headerTitle: "Adventure",
          list:this.props.list.map(item => <li onClick={()=>this.genderSelect(item.title)} key={item.id}>{item.title}</li>)
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
       this.setState((prevState)=>{
           return {
                listOpen:!prevState.listOpen
           }
       })
    }

    genderSelect(title){
        this.setState(()=>{
            return{
                listOpen: false,
                headerTitle:title
            }
        })
        this.props.ug(title)
    }

    render() {
        return (
          <div id="dropDown">
            <div name="genre" id="genre">
                <button onClick={this.handleClick}>{this.state.headerTitle}<FontAwesomeIcon icon={this.state.listOpen?faChevronDown:faChevronLeft} /></button>
            </div>
            {this.state.listOpen && <div id="list">
                <ul>
                    {this.state.list}
                </ul>
            </div>}
          </div>
        )    
    }
}

export default Dropdown

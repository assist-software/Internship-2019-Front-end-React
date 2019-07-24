import React from 'react';
import Hero from "./Hero/Hero"
import RecentAdded from "./RecentAdded/RecentAdded"
import ComingNext from "./ComingNext/ComingNext"
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <Hero />
                <RecentAdded updateCounter={()=>this.props.updateCounter()} />
                <ComingNext  updateCounter={()=>this.props.updateCounter()} />
            </div>
        )    
    }
}

export default Home

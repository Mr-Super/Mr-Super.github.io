import React from 'react';
import CardList  from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll'
import "./App.css";


class App extends React.Component   {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({ robots: users })
        })
    }
    OnSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render () {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ? 
             <h1>Loadingggggg</h1> :
        (
                <div className="tc">
                    <h1 className="f2">RoboFriends</h1>
                    <SearchBox searchChange={this.OnSearchChange} />
                    <Scroll >
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
        )        
    }
}
 
export default App;

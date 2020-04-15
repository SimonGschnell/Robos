import React, {Fragment} from 'react'
import {robots} from './robots.js'
import CardList from '../Components/CardList.js'
import SearchField from '../Components/SearchField.js'
import Scroll from '../Components/Scroll.js'
import ErrorBoundry from '../Components/ErrorBoundry.js'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots,
            searchfield: ''
        }
    }
    componentDidMount() {
        //fetch example = fetch('https://api.chucknorris.io/jokes/random').then((response)=>{return response.json()}).then(data => console.log(data.value))
    }
    changeSearchField = (event)=>{
            console.log(event.target.value);
            this.setState({searchfield: event.target.value});
        
    }
    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(
            (robot)=>{
                return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        );
        return(
        <Fragment>
            <SearchField searchFieldChange={this.changeSearchField}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </Fragment>
        )
    }
}

export default App;
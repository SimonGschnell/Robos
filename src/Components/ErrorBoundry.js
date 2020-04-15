import React, { Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            error : false
        }
        
    }
    componentDidCatch(first, info){
        this.setState({error : true});
        console.log("hi?")
    }
    render () {
        return this.state.error ? (<p>Something went wrong</p>):(this.props.children)
        
    }
}

export default ErrorBoundry;
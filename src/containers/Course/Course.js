import React, { Component } from 'react';

class Course extends Component {

    state = {
        id: null,
        title: null,
    }

    loadDataHandler(){
        const params = new URLSearchParams(this.props.location.search);
        if(!this.state.id || (this.state.id && this.props.match.params.id != this.state.id)){
            this.setState({id: this.props.match.params.id, title: params.get('title')});
        }        
    }

    componentDidMount(){
        this.loadDataHandler();
    }

    componentDidUpdate(){
        this.loadDataHandler();
    }

    render () {        
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default Course;
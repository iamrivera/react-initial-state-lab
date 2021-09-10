// your Bomb code here!

import React, { Component } from 'react'; 

class Bomb extends Component {

    constructor(props) { //props that the component gets from its parent
        super();
        this.state = { //define initial state with a key of 'someKey' set to the 'someValue' prop
        secondsLeft: props.initialCount
        };
    }

    bombValue = () => {
        if (this.state.secondsLeft !== 0)
            return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        else
            return <div>Boom!</div>
    }

    render() {
        // {console.log(this.props.initialCount)};
        return <div>{this.bombValue()}</div>
    }

}

export default Bomb
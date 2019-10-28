// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component{
    constructor(props) {
        super()
        // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render(){
        if(this.state.secondsLeft === 0){
            return <div>Boom!</div>
        }else{
            return (<div>
                        {this.state.secondsLeft} seconds left before I go boom!
                    </div>)
        }
    }

}
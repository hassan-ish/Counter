import React, { Component } from "react";
import './style.css'
export default class Counter extends Component {

  render() {
    return (
      <div>
        <button onClick={()=>this.props.onDecrement(this.props.id , this.props.steps)}>-</button>
        <p>{this.props.count}</p>
        <button onClick={()=>this.props.onIncrement(this.props.id , this.props.steps)}>+</button>
      </div>
    );
  }
}

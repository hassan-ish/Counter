import React, { Component } from "react";
import Counter from "../Components/Counter";

const countersArr = [
  { id: 1, count: 0, steps: 1 },
  { id: 2, count: 0, steps: 5 },
  { id: 3, count: 0, steps: 1 },
];
export default class Counters extends Component {
  state = {
    countersArr,
  };
  onIncrement = (id, steps) => {
    this.setState((prevState) => {
      return {
        countersArr: prevState.countersArr.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + steps };
          }
          return item;
        }),
      };
    });
  };
  onDecrement = (id, steps) => {
    this.setState((prevState) => {
      return {
        countersArr: prevState.countersArr.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              
              count: item.count > 0 ? item.count - steps : 0,
            };
          }
          return item;
        }),
      };
    });

  };
  render() {
    return (
      <div>
        {this.state.countersArr.map((item) => (
          <Counter key={item.id} {...item} onIncrement={this.onIncrement} onDecrement={this.onDecrement} />
        ))}
      </div>
    );
  }
}
//<Counter key={item.id}  item={item} /> pass the object as props
// <Counter key={item.id} {...item} /> pass the key of the object as props

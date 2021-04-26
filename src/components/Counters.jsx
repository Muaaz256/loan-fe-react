import React, {Component} from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  }
  
  handleReset = () => {
    const counters = this.state.counters.map(
      counter => ({id: counter.id, value: 0})
    );
    this.setState({counters});
  }
  
  
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = {...counter};
    counters[counterIndex].value++;
    this.setState({counters});
  }
  
  handleDelete = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({counters});
  }
  
  render() {
    return (
      <div>
        <button className="btn btn-primary m-2" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(
          counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
            />
          )
        )}
      </div>
    );
  }
}

export default Counters;
import './App.css';
import React, { Component } from 'react';

import Counters from './components/Counters';
import NavBar from './components/NavBar';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 6 },
      { id: 3, value: 5 },
      { id: 4, value: 1 },
      { id: 5, value: 0 },
    ],
  };

  onCountersChanged = (changeType, counterId) => {
    this.setState((state) => {
      const counters = state.counters.map((counter) => ({ ...counter }));
      const counterIndex = counters.findIndex(
        (counter) => counter.id === counterId
      );
      if (changeType === 'add') {
        counters[counterIndex].value++;
      } else if (changeType === 'subtract') {
        counters[counterIndex].value--;
      } else {
        counters.splice(counterIndex, 1);
      }
      return { counters };
    });
  };

  onResetCounters = () => {
    this.setState((state) => {
      const counters = state.counters.map((counter) => ({
        id: counter.id,
        value: 0,
      }));
      return { counters };
    });
  };

  getActiveCounters = () => {
    return this.state.counters.reduce((activeCounters, counter) => {
      return activeCounters + (counter.value === 0 ? 0 : 1);
    }, 0);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar activeCounters={this.getActiveCounters()}></NavBar>
        <Counters
          counters={this.state.counters}
          onCountersChanged={this.onCountersChanged}
          onResetCounters={this.onResetCounters}
        ></Counters>
      </React.Fragment>
    );
  }
}

export default App;

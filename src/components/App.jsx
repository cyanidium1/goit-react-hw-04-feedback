import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Stats from './Stats/Stats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increase = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotal = () => {
    return Object.values(this.state).reduce(
      (partialSum, a) => partialSum + a,
      0
    );
  };
  countPercentage = () => {
    return Math.round(
      (this.state.good / (this.state.good + this.state.bad)) * 100
    );
  };

  render() {
    const total = this.countTotal();
    const percentage = this.countPercentage();
    const options = Object.keys(this.state);
    return (
      <>
        <h2>Stats</h2>
        <Feedback increase={this.increase} options={options} />
        {!this.state.good && !this.state.neutral && !this.state.bad ? (
          <p>No stats</p>
        ) : (
          <Stats params={this.state} total={total} percentage={percentage} />
        )}
      </>
    );
  }
}

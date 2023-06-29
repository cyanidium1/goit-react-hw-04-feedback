import Feedback from './Feedback/Feedback';
import Stats from './Stats/Stats';
import { useState } from 'react';

const App = () => {
  const [state, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const increase = option => {
    setCount(() => {
      return { ...state, [option]: state[option] + 1 };
    });
  };

  const countTotal = () => {
    return Object.values(state).reduce((partialSum, a) => partialSum + a, 0);
  };
  const countPercentage = () => {
    return Math.round((state.good / (state.good + state.bad)) * 100);
  };

  const total = countTotal();
  const percentage = countPercentage();
  const options = Object.keys(state);
  return (
    <>
      <h2>Stats</h2>
      <Feedback increase={increase} options={options} />
      {!state.good && !state.neutral && !state.bad ? (
        <p>No stats</p>
      ) : (
        <Stats params={state} total={total} percentage={percentage} />
      )}
    </>
  );
};

export default App;

import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Stats from './Stats/Stats';

const App = () => {
  // const [value, setValue] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const value = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  const increase = option => {
    switch (option) {
      case 'good':
        setgood([option] + 1);
        break;
      case 'neutral':
        setneutral([option] + 1);
        break;
      case 'bad':
        setbad([option] + 1);
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };
  const countPercentage = () => {
    return Math.round((good / (good + bad)) * 100);
  };

  const total = countTotal();
  const percentage = countPercentage();
  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <h2>Stats</h2>
      <Feedback increase={increase} options={options} />
      {!good && !neutral && !bad ? (
        <p>No stats</p>
      ) : (
        <Stats
          params={[good, neutral, bad]}
          total={total}
          percentage={percentage}
        />
      )}
    </>
  );
};

export default App;

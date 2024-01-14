import { useState, useEffect } from 'react';

import { Description } from 'Components/Description/Description';
import { Options } from 'Components/Options/Options';
import { FeedBack } from 'Components/FeedBack/FeedBack';
import { Notification } from 'Components/Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [feedBack, setFeedBack] = useState(() => {
    const savedFeetBack = window.localStorage.getItem('local-FeetBack');

    return savedFeetBack !== null ? JSON.parse(savedFeetBack) : initialState;
  });

  const { good, neutral, bad } = feedBack;
  
  const totalFeedback = good + neutral + bad;
  const positiveFeedBack = Math.round((good / totalFeedback) * 100);

  const handleClick = e => {
    const { name } = e.target;

    name === 'reset'
      ? (setFeedBack(initialState), localStorage.removeItem('local-FeetBack'))
      : setFeedBack(feedBack => ({ ...feedBack, [name]: feedBack[name] + 1 }));
  };

  useEffect(() => {
    localStorage.setItem('local-FeetBack', JSON.stringify(feedBack));
  }, [feedBack]);

  return (
    <div>
      <Description />
      <Options handleClick={handleClick} totalFeedback={totalFeedback} />
      {totalFeedback ? (
        <FeedBack
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedBack={positiveFeedBack}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let' hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  // month 0-11
  // Northen hemisphere: summer 3-8
  // Southern hemisphere: winter 3-8

  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  const month = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>
        [{month}]
        <br />
        {text}
      </h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;

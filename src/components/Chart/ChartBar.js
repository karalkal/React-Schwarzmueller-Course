import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    /*
      1st obj { "label": "Jan", "value": 120 }
      2nd obj { "label": "Mar", "value": 30 }    
      propsMaxValue is already set to 120, 
      for 1st we get 120/120 * 100 = 100%
      for 2nd we get 30/120 * 100 = 25%
    */


    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          // provide properties: values in style attributes as object
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
  );
};

export default ChartBar;

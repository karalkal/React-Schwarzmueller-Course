import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  // create array of values, then determine largest value. It will serve as 100% ,the smaller values will be percentages of this.
  // say for year 2022 have [{"label": "Jan", "value": 120}, {"label": "Mar", "value": 30}]
  // totalMaximum will be 120, 30 will be converted to height 25% of max, see ChartBar.js

  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

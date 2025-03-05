import extractMovementTimes from '../parsers/movementTimesParser';
import { DataObject } from '../parsers/types';
import jsonData from '../../data.json' with { type: 'json' };
import calculateHourlyMovements from '../calculators/hourlyMovements';

import React from 'react';
import BarChart from '../components/BarChart';


const data: DataObject[] = jsonData;
const movementTimes = extractMovementTimes(data);
const hourlyMovementsAmount = calculateHourlyMovements(movementTimes);
console.log(hourlyMovementsAmount);


const HourlyMovementsChart: React.FC = () => {
  return (
    <div>
      <BarChart data={hourlyMovementsAmount} />
    </div>
  );
};


export default HourlyMovementsChart;

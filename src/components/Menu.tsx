import React, { useState } from 'react';
import HourlyMovementsChart from '../charts/hourlyMovements';

const ChartMenu: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState('bar'); // Default chart

  const handleChartChange = (chartType: string) => {
    setSelectedChart(chartType);
  };

  const renderChart = () => {
    switch (selectedChart) {
      case 'bar':
        return <HourlyMovementsChart />;
      case 'line':
        return <>Hello?line</>;
      case 'pie':
        return <>Hello?pie</>;
      default:
        return <div>Select a chart</div>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handleChartChange('bar')}>Bar Chart</button>
        <button onClick={() => handleChartChange('line')}>Line Chart</button>
        <button onClick={() => handleChartChange('pie')}>Pie Chart</button>
      </div>
      <div>
        {renderChart()}
      </div>
    </div>
  );
};

export default ChartMenu;

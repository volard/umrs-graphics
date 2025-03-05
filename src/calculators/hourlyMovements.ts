import { Movement } from '../parsers/types'; 
import { BarChartData } from '../components/BarChart';

const calculateHourlyMovements = (movements: Movement[]): BarChartData[] => {
  // Initialize an array to store counts for each hour (24 hours)
  const hourlyCounts: number[] = new Array(24).fill(0);

  // Iterate through each movement
  movements.forEach((movement) => {
    const startTime = new Date(`2025-01-01 ${movement.departureTime}`); 
    const endTime = new Date(`2025-01-01 ${movement.arrivalTime}`);

    // Get the starting and ending hours
    const startHour = startTime.getHours();
    const endHour = endTime.getHours();

    // Increment the count for each hour within the movement's duration
    for (let i = startHour; i <= endHour; i++) {
      hourlyCounts[i]++;
    }
  });

  // Format the output array
  const hourlyMovementsAmount = hourlyCounts.map((count, index) => {
    const startHour = index.toString().padStart(2, '0'); 
    const endHour = ((index + 1) % 24).toString().padStart(2, '0'); 
    return { name: `${startHour}:00-${endHour}:00`, value: count };
  });

  return hourlyMovementsAmount;
};

export default calculateHourlyMovements;
import jsonData from '../data.json' assert { type: 'json' };


interface Movement {
  departureTime: string;
  arrivalTime: string;
}

interface Survey {
  movements: Movement[];
}

interface DataObject {
  survey: Survey[];
}

// const data: DataObject[] = jsonData;
//
// const extractMovementTimes = (jsonData: DataObject[]): Movement[] => {
//   return jsonData.reduce<Movement[]>((acc, dataObject) => {
//     const movements = dataObject.movements.map((movement: Movement) => ({
//       departureTime: movement.departureTime,
//       // Use the correct 'arrivalTime' property here:
//       arrivalTime: movement.arrivalTime 
//     }));
//
//     return [...acc, ...movements]; 
//   }, []);
// };

// const movementTimes = extractMovementTimes(data);
console.log(jsonData);

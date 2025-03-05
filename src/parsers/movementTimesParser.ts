import { DataObject, Movement } from './types';

const extractMovementTimes = (jsonData: DataObject[]): Movement[] => {
    return jsonData.reduce<Movement[]>((acc, dataObject) => {
        const movements = dataObject.movements.map((movement: Movement) => ({
            departureTime: movement.departureTime,
            arrivalTime: movement.arrivalTime
        }));
        return [...acc, ...movements];
    }, []);
};


export default extractMovementTimes;

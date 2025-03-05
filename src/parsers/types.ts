interface Movement {
  departureTime: string;
  arrivalTime: string;
}

interface DataObject {
  movements: Movement[];
}

export type { Movement, DataObject };
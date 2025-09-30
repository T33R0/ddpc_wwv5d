export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface Vehicle {
  id: string;
  ownerId: string;
  make: string;
  model: string;
  year: number;
  vin?: string;
  imageUrl?: string;
  engineType?: 'I4' | 'I6' | 'V6' | 'V8' | 'V10' | 'EV';
  fuelType?: 'Gasoline' | 'Diesel' | 'Electric';
  drivetrain?: 'RWD' | 'FWD' | 'AWD';
  doors?: 2 | 3 | 4;
  vehicleType?: 'Sedan' | 'Coupe' | 'SUV' | 'Truck' | 'Hatchback';
  trim?: string;
}

export interface WorkItem {
  id: string;
  vehicleId: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  date: string; // ISO 8601 format
}

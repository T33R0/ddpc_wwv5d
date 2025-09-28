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
}

export interface WorkItem {
  id: string;
  vehicleId: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  date: string; // ISO 8601 format
}

import type { User, Vehicle, WorkItem } from "@repo/types";

export const mockUsers: User[] = [
  {
    id: "user-1",
    username: "Gearhead_Gavin",
    email: "gavin@example.com",
    avatarUrl: "/avatars/01.png",
  },
  {
    id: "user-2",
    username: "Wrenchin_Wendy",
    email: "wendy@example.com",
    avatarUrl: "/avatars/02.png",
  },
  {
    id: "user-3",
    username: "ProjectCar_Pete",
    email: "pete@example.com",
    avatarUrl: "/avatars/03.png",
  },
];

export const mockVehicles: Vehicle[] = [
  {
    id: "vehicle-1",
    ownerId: "user-1",
    make: "Honda",
    model: "S2000",
    year: 2004,
    vin: "JHMAP21404S000001",
    imageUrl: "/vehicles/s2000.jpg",
  },
  {
    id: "vehicle-2",
    ownerId: "user-2",
    make: "Nissan",
    model: "240SX (S13)",
    year: 1991,
    vin: "JN1HS36PXM0000002",
    imageUrl: "/vehicles/240sx.jpg",
  },
  {
    id: "vehicle-3",
    ownerId: "user-3",
    make: "BMW",
    model: "E30 M3",
    year: 1988,
    vin: "WBSAK0305J0000003",
    imageUrl: "/vehicles/e30.jpg",
  },
];

export const mockWorkItems: WorkItem[] = [
  {
    id: "work-1",
    vehicleId: "vehicle-1",
    title: "Oil Change",
    description: "Performed standard oil and filter change.",
    status: "done",
    date: "2024-09-15T10:00:00Z",
  },
  {
    id: "work-2",
    vehicleId: "vehicle-1",
    title: "Install Coilovers",
    description: "Installing new suspension.",
    status: "in-progress",
    date: "2024-09-28T14:00:00Z",
  },
  {
    id: "work-3",
    vehicleId: "vehicle-2",
    title: "Engine Swap",
    description: "Planning to swap in an SR20DET.",
    status: "todo",
    date: "2024-10-01T09:00:00Z",
  },
];

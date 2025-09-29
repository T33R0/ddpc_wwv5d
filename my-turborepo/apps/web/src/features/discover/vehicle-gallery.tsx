'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@repo/ui/card';
import { FlipReveal, FlipRevealItem } from '@repo/ui/flip-reveal';
import type { Vehicle } from '@repo/types';
import type { FilterState } from './vehicle-filters';

type VehicleGalleryProps = {
  vehicles: Vehicle[];
  filters: FilterState;
};

export function VehicleGallery({ vehicles, filters }: VehicleGalleryProps) {
  const filteredVehicles = vehicles.filter(vehicle => {
    return (
      (filters.vehicleType === 'all' || vehicle.vehicleType === filters.vehicleType) &&
      (filters.make === 'all' || vehicle.make === filters.make) &&
      (filters.drivetrain === 'all' || vehicle.drivetrain === filters.drivetrain)
    );
  });

  return (
    <FlipReveal
      keys={filteredVehicles.map(v => v.id)}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      showClass="flex"
      hideClass="hidden"
    >
      {vehicles.map((vehicle) => (
        <FlipRevealItem key={vehicle.id} flipKey={vehicle.id}>
          <Card>
            <CardHeader>
              <Image
                src={vehicle.imageUrl || "/placeholder.svg"}
                alt={`${vehicle.make} ${vehicle.model}`}
                width={400}
                height={225}
                className="rounded-t-lg object-cover aspect-video"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-2xl">{vehicle.make} {vehicle.model}</CardTitle>
              <p className="text-muted-foreground">{vehicle.year}</p>
            </CardContent>
          </Card>
        </FlipRevealItem>
      ))}
    </FlipReveal>
  );
}

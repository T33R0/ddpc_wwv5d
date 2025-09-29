'use client';

import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@repo/ui/toggle-group';

export type FilterState = {
  vehicleType: string;
  make: string;
  drivetrain: string;
};

type VehicleFiltersProps = {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
};

export function VehicleFilters({ filters, onFilterChange }: VehicleFiltersProps) {
  const handleValueChange = (key: keyof FilterState) => (value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <ToggleGroup type="single" value={filters.vehicleType} onValueChange={handleValueChange('vehicleType')}>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="Coupe">Coupe</ToggleGroupItem>
        <ToggleGroupItem value="Sedan">Sedan</ToggleGroupItem>
        <ToggleGroupItem value="SUV">SUV</ToggleGroupItem>
        <ToggleGroupItem value="Truck">Truck</ToggleGroupItem>
        <ToggleGroupItem value="Hatchback">Hatchback</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" value={filters.make} onValueChange={handleValueChange('make')}>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="Honda">Honda</ToggleGroupItem>
        <ToggleGroupItem value="Nissan">Nissan</ToggleGroupItem>
        <ToggleGroupItem value="BMW">BMW</ToggleGroupItem>
        <ToggleGroupItem value="Toyota">Toyota</ToggleGroupItem>
        <ToggleGroupItem value="Ford">Ford</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" value={filters.drivetrain} onValueChange={handleValueChange('drivetrain')}>
        <ToggleGroupItem value="all">All</ToggleGroupItem>
        <ToggleGroupItem value="RWD">RWD</ToggleGroupItem>
        <ToggleGroupItem value="FWD">FWD</ToggleGroupItem>
        <ToggleGroupItem value="AWD">AWD</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

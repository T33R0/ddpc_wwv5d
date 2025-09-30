'use client';

import React, { useState } from 'react';
import { VehicleFilters, type FilterState } from "../../features/discover/vehicle-filters";
import { VehicleGallery } from "../../features/discover/vehicle-gallery";
import { mockVehicles } from "../../lib/mock-data";

export default function Discover() {
  const [filters, setFilters] = useState<FilterState>({ minYear: null, maxYear: null, make: null, model: null, engineType: null, fuelType: null, drivetrain: null, doors: null, vehicleType: null });

  return (
    <section className="py-12">
      <div className="container px-4 md:px-6 pt-24">
                <VehicleFilters filters={filters} onFilterChange={setFilters} />
        <VehicleGallery vehicles={mockVehicles} filters={filters} />
      </div>
    </section>
  );
}

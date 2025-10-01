'use client';

import React, { useState } from 'react';
import { VehicleFilters, type FilterState } from "../../features/discover/vehicle-filters";
import { VehicleGallery } from "../../features/discover/vehicle-gallery";
import { mockVehicles } from "../../lib/mock-data";

export default function Discover() {
  const [filters, setFilters] = useState<FilterState>({ minYear: null, maxYear: null, make: null, model: null, engineType: null, fuelType: null, drivetrain: null, doors: null, vehicleType: null });

  return (
    <section className="relative py-12 bg-black">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-red-500 to-purple-400" />
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300" />
      </div>
      <div className="relative container px-4 md:px-6 pt-24">
        <VehicleFilters filters={filters} onFilterChange={setFilters} />
        <VehicleGallery vehicles={mockVehicles} filters={filters} />
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { DropdownMenu } from '@repo/ui/dropdown-menu';
import { mockVehicles } from '../../lib/mock-data';

export function VehicleFilters() {
  const [minYear, setMinYear] = useState<number | null>(null);
  const [maxYear, setMaxYear] = useState<number | null>(null);
  const [make, setMake] = useState<string | null>(null);
  const [model, setModel] = useState<string | null>(null);

  const years = Array.from(new Set(mockVehicles.map(v => v.year))).sort((a, b) => b - a);
  const makes = Array.from(new Set(mockVehicles.map(v => v.make)));
  const models = Array.from(new Set(mockVehicles.filter(v => !make || v.make === make).map(v => v.model)));

  return (
    <div className="flex gap-4 mb-8">
      <DropdownMenu
        options={years.map(y => ({ label: y.toString(), onClick: () => setMinYear(y) }))}
      >
        {minYear || 'Min Year'}
      </DropdownMenu>
      <DropdownMenu
        options={years.map(y => ({ label: y.toString(), onClick: () => setMaxYear(y) }))}
      >
        {maxYear || 'Max Year'}
      </DropdownMenu>
      <DropdownMenu
        options={makes.map(m => ({ label: m, onClick: () => setMake(m) }))}
      >
        {make || 'Make'}
      </DropdownMenu>
      <DropdownMenu
        options={models.map(m => ({ label: m, onClick: () => setModel(m) }))}
      >
        {model || 'Model'}
      </DropdownMenu>
    </div>
  );
}

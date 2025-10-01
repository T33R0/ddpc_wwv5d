'use client';

import React from 'react';
import { ImageWithFallback } from '../../components/image-with-fallback';
import toast from 'react-hot-toast';
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
      (!filters.minYear || vehicle.year >= filters.minYear) &&
      (!filters.maxYear || vehicle.year <= filters.maxYear) &&
      (!filters.make || vehicle.make === filters.make) &&
      (!filters.model || vehicle.model === filters.model) &&
      (!filters.engineType || vehicle.engineType === filters.engineType) &&
      (!filters.fuelType || vehicle.fuelType === filters.fuelType) &&
      (!filters.drivetrain || vehicle.drivetrain === filters.drivetrain) &&
      (!filters.doors || vehicle.doors === filters.doors) &&
      (!filters.vehicleType || vehicle.vehicleType === filters.vehicleType)
    );
  });

  return (
    <FlipReveal
      keys={filteredVehicles.map(v => v.id)}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start"
      showClass="flex"
      hideClass="hidden"
    >
      {vehicles.map((vehicle) => (
        <FlipRevealItem key={vehicle.id} flipKey={vehicle.id} className="group transition-all duration-300">
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-4 text-white flex flex-col gap-4 border border-transparent transition-all duration-300 group-hover:scale-105 group-hover:border-lime-400/50 group-hover:shadow-lg group-hover:shadow-lime-500/20">
            <div className="flex justify-between items-center text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                In {Math.floor(Math.random() * 100)} garages
              </div>
              <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <ImageWithFallback
              src={vehicle.imageUrl || ''}
              fallbackSrc="/branding/fallback-logo.png"
              alt={`${vehicle.make} ${vehicle.model}`}
              width={400}
              height={225}
              className="rounded-lg object-cover aspect-video bg-black/20"
            />
            <div className="text-center">
              <h3 className="font-bold text-lg">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
              <p className="text-neutral-400 text-sm">{vehicle.trim}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => toast.success('Vehicle details coming soon!')} className="bg-white/10 hover:bg-white/20 transition-colors w-full py-2 rounded-lg text-sm">Vehicle Details</button>
              <button onClick={() => toast.success('Added to your garage!')} className="bg-white/10 hover:bg-white/20 transition-colors w-full py-2 rounded-lg text-sm">Add to Garage</button>
            </div>
            <div className="bg-lime-500/20 text-lime-400 text-xs text-center py-2 rounded-lg">
              {Math.floor(Math.random() * 50)} public builds
            </div>
          </div>
        </FlipRevealItem>
      ))}
    </FlipReveal>
  );
}

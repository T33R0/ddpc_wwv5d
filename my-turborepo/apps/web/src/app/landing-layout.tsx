'use client';

import React from 'react';
import { Footer } from '@repo/ui/footer';

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <main className="flex-grow">{children}</main>
    </div>
  );
}

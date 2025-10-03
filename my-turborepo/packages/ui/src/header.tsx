'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { AuthModal } from './auth-modal';
import { ChatDrawer } from './chat-drawer';
import { Button } from './button';
import { GridCard } from './grid-card';
import { PricingDropdown } from './landing/Pricing';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from './navigation-menu';

const ScrutineerTab = ({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) => (
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full">
    <div
      className="relative w-48 h-10 bg-neutral-900/80 backdrop-blur-lg rounded-b-lg border-b border-x border-neutral-700 cursor-pointer group"
      onClick={onClick}
    >
      <div className="absolute -left-2.5 -top-0 w-2.5 h-2.5 bg-transparent"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
        <div className="w-full h-full bg-neutral-900/80 border-r border-neutral-700 group-hover:bg-neutral-800/80" />
      </div>
      <div className="absolute -right-2.5 -top-0 w-2.5 h-2.5 bg-transparent"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}>
        <div className="w-full h-full bg-neutral-900/80 border-l border-neutral-700 group-hover:bg-neutral-800/80" />
      </div>
      <div className="flex items-center justify-center h-full text-white text-sm font-medium group-hover:bg-neutral-800/80 rounded-b-lg transition-colors">
        Scrutineer
        {isOpen ? <ChevronUp className="h-3 w-3 ml-2" /> : <ChevronDown className="h-3 w-3 ml-2" />}
      </div>
    </div>
  </div>
);

export function Header() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [chatDrawerOpen, setChatDrawerOpen] = React.useState(false);

  return (
    <>
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <ChatDrawer open={chatDrawerOpen} onOpenChange={setChatDrawerOpen} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-neutral-800">
        <div className="relative container mx-auto px-4 h-16 flex items-center justify-between text-white">
          <div className="flex items-center">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-full">
                      <GridCard title="Explore Vehicles" href="/discover">
                        Browse a curated collection of unique and interesting vehicles.
                      </GridCard>
                      <GridCard title="Featured Builds" href="/builds">
                        Get inspired by top builds from the community.
                      </GridCard>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-3 p-4 w-full">
                      <GridCard title="Community Builds" href="/community/builds">
                        See what others are building and share your own progress.
                      </GridCard>
                      <GridCard title="Member Garages" href="/community/garages">
                        Check out the garages of other enthusiasts.
                      </GridCard>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <PricingDropdown />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center">
            <Button onClick={() => setAuthModalOpen(true)}>Sign In</Button>
          </div>
          
          <ScrutineerTab onClick={() => setChatDrawerOpen(!chatDrawerOpen)} isOpen={chatDrawerOpen} />
        </div>
      </header>
    </>
  );
}

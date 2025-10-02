'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './logo';
import { AuthModal } from './auth-modal';
import { ChatDrawer } from './chat-drawer';
import { Button } from './button';
import { GridCard } from './grid-card';
import { Pricing, PricingDropdown } from './landing/Pricing';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './navigation-menu';

export function Header() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [chatDrawerOpen, setChatDrawerOpen] = React.useState(false);

  return (
    <>
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      <ChatDrawer open={chatDrawerOpen} onOpenChange={setChatDrawerOpen} />
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto p-4 text-white">
        {/* Top row with logo and sign in */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <Logo />
          </Link>
          <Button onClick={() => setAuthModalOpen(true)}>Sign In</Button>
        </div>

        {/* Centered navigation menu */}
        <div className="flex justify-center">
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

        {/* Scrutineer Tab - positioned at bottom of header, centered and merged with bottom edge */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setChatDrawerOpen(!chatDrawerOpen)}
            className="bg-transparent border-0 h-10 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800/50 transition-colors flex items-center gap-2"
          >
            Scrutineer
            {chatDrawerOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        </div>
      </div>
    </header>
    </>
  );
}

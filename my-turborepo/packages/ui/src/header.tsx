"use client";

import { Logo } from "./logo";
import { Button } from "./button";

export function Header() {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="/">
              <Logo />
            </a>
            <nav className="hidden md:flex md:gap-6">
              <a href="/garage" className="text-sm font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Garage</a>
              <a href="/timeline" className="text-sm font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Timeline</a>
              <a href="/tasks" className="text-sm font-medium uppercase text-muted-foreground transition-colors hover:text-foreground">Tasks</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary">Sign In</Button>
            <Button>Start Your Build Log</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

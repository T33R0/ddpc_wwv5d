'use client';

import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from './drawer';
import { ChatWindow } from './chat-window';
import { ChevronUp } from 'lucide-react';

type ChatDrawerProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ChatDrawer({ open, onOpenChange }: ChatDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="top">
      <DrawerContent className="h-[90vh] flex flex-col">
        <DrawerHeader className="text-left flex-shrink-0">
          <DrawerTitle>Scrutineer</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto flex-grow">
          <ChatWindow />
        </div>
        <DrawerClose asChild>
          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <ChevronUp className="h-6 w-6 text-white" />
          </button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

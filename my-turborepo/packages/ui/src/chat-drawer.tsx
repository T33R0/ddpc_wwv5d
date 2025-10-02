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
      <DrawerContent className="h-[calc(100vh-80px)] mt-20 flex flex-col rounded-t-3xl">
        <DrawerHeader className="text-left flex-shrink-0">
          <DrawerTitle>Scrutineer</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto flex-grow">
          <ChatWindow />
        </div>
        {/* Tab-like close button at bottom of modal */}
        <div className="flex justify-center pb-4">
          <DrawerClose asChild>
            <button className="bg-black/50 backdrop-blur-lg border border-white/20 rounded-b-lg h-10 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800/50 transition-colors flex items-center gap-2 shadow-lg">
              Scrutineer
              <ChevronUp className="h-3 w-3" />
            </button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

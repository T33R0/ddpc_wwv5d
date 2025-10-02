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
      <DrawerContent className="h-[calc(100vh-120px)] mt-32 flex flex-col rounded-t-3xl">
        <DrawerHeader className="text-left flex-shrink-0">
          <DrawerTitle>Scrutineer</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto flex-grow">
          <ChatWindow />
        </div>
        {/* Close button attached to bottom of modal */}
        <div className="flex justify-center pb-4 -mb-4">
          <DrawerClose asChild>
            <button className="bg-black/50 backdrop-blur-lg border border-white/20 rounded-b-lg h-10 w-20 flex items-center justify-center hover:bg-slate-800/50 transition-colors shadow-lg">
              <ChevronUp className="h-3 w-3 text-white" />
            </button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

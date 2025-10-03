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
          <ChatWindow onClose={() => onOpenChange(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

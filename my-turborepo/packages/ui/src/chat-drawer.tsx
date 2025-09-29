'use client';

import React from 'react';
import {
  Drawer,
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
      <DrawerContent className="h-[80vh]">
        <DrawerHeader className="text-left">
          <DrawerTitle>Scrutineer</DrawerTitle>
        </DrawerHeader>
        <div className="overflow-y-auto p-4">
          <ChatWindow />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

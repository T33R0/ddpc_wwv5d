"use client";

import React, { useState } from "react";
import {
    SmilePlus,
    Send,
    MoreHorizontal,
    CheckCheck,
    Check,
    Users,
} from "lucide-react";
import Image from "next/image";
import { cn } from "./lib/utils";

interface Message {
    id: string;
    content: string;
    sender: {
        name: string;
        avatar: string;
        isOnline: boolean;
    };
    timestamp: string;
    status: "sent" | "delivered" | "read";
    reactions?: Array<{
        emoji: string;
        count: number;
        reacted: boolean;
    }>;
}

interface ChatWindowProps {
    chatName?: string;
    messages?: Message[];
}

export function ChatWindow({
    chatName = "Design Discussions",
    messages = [
        {
            id: "1",
            content: "What do you all think of the new discover page design?",
            sender: {
                name: "Alex Patterson",
                avatar:
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isOnline: true,
            },
            timestamp: "11:30 AM",
            status: "read",
            reactions: [
                { emoji: "👍", count: 4, reacted: true },
                { emoji: "🤔", count: 1, reacted: false },
            ],
        },
        {
            id: "2",
            content:
                "I love it! The vehicle gallery is super clean and the chat window is a great touch.",
            sender: {
                name: "Samantha Lee",
                avatar:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                isOnline: true,
            },
            timestamp: "11:32 AM",
            status: "delivered",
        },
    ],
}: ChatWindowProps) {
    const [selectedSender, setSelectedSender] = useState<string | null>(null);

    const uniqueSenders = Array.from(
        new Map(
            messages.map((m) => [m.sender.name, m.sender])
        ).values()
    );

    const filteredMessages = selectedSender
        ? messages.filter((m) => m.sender.name === selectedSender)
        : messages;

    return (
        <div className="w-full max-w-5xl mx-auto p-6 bg-white dark:bg-black rounded-3xl shadow-lg flex flex-col h-[550px] border border-gray-200 dark:border-gray-800">
            <header className="flex justify-between items-center border-b border-gray-200 dark:border-gray-800 pb-4 mb-4">
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                        <Users className="w-6 h-6 text-black dark:text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-black dark:text-white">
                            {chatName}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            A space for real-time collaboration.
                        </p>
                    </div>
                </div>
                <button
                    aria-label="More options"
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                    <MoreHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </button>
            </header>

            <main className="flex flex-1 overflow-hidden">
                <aside className="w-64 border-r border-gray-200 dark:border-gray-800 pr-4 overflow-y-auto">
                    <h3 className="text-lg font-semibold mb-4 px-2 text-black dark:text-white">Team Members</h3>
                    <div className="space-y-2">
                        {uniqueSenders.map((sender) => {
                            const isSelected = selectedSender === sender.name;
                            return (
                                <button
                                    key={sender.name}
                                    onClick={() =>
                                        setSelectedSender(
                                            isSelected ? null : sender.name
                                        )
                                    }
                                    className={cn(
                                        "flex items-center gap-3 w-full p-2 rounded-lg transition-colors",
                                        isSelected
                                            ? "bg-black dark:bg-white text-white dark:text-black"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100"
                                    )}
                                >
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src={sender.avatar}
                                            alt={sender.name}
                                            width={36}
                                            height={36}
                                            className="rounded-full"
                                        />
                                        <span
                                            className={cn(
                                                "absolute bottom-0 right-0 block w-2.5 h-2.5 rounded-full ring-2 ring-white dark:ring-black",
                                                sender.isOnline
                                                    ? "bg-green-500"
                                                    : "bg-gray-400"
                                            )}
                                        />
                                    </div>
                                    <span className="text-sm font-medium truncate text-left">
                                        {sender.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </aside>

                <section className="flex-1 pl-4 flex flex-col bg-white dark:bg-black">
                    <div className="flex-1 p-4 overflow-y-auto space-y-6">
                        {filteredMessages.length === 0 ? (
                            <div className="flex items-center justify-center h-full">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Select a team member to view messages.
                                </p>
                            </div>
                        ) : (
                            filteredMessages.map((message) => (
                                <div
                                    key={message.id}
                                    className="flex items-start gap-4"
                                >
                                    <Image
                                        src={message.sender.avatar}
                                        alt={message.sender.name}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-baseline gap-2">
                                            <p className="font-bold text-black dark:text-white">
                                                {message.sender.name}
                                            </p>
                                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                                {message.timestamp}
                                            </span>
                                        </div>
                                        <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-lg mt-1">
                                            <p className="text-gray-800 dark:text-gray-200">
                                                {message.content}
                                            </p>
                                        </div>
                                        <div className="flex items-center justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                {message.reactions?.map((reaction) => (
                                                    <button
                                                        key={reaction.emoji}
                                                        className={cn(
                                                            "px-2 py-0.5 rounded-full text-xs transition-colors flex items-center gap-1",
                                                            reaction.reacted
                                                                ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300"
                                                                : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                                                        )}
                                                    >
                                                        <span>{reaction.emoji}</span>
                                                        <span>{reaction.count}</span>
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {message.status === "read" && (
                                                    <CheckCheck className="w-4 h-4 text-blue-500" />
                                                )}
                                                {message.status === "delivered" && (
                                                    <Check className="w-4 h-4" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <footer className="mt-auto flex items-center gap-2 p-4 border-t border-gray-200 dark:border-gray-800">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className={cn(
                                "flex-1 w-full px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700",
                                "bg-gray-50 dark:bg-gray-900 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400",
                                "focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow"
                            )}
                        />
                        <button
                            aria-label="Add emoji"
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <SmilePlus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </button>
                        <button
                            aria-label="Send message"
                            className="p-2 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity"
                        >
                            <Send className="w-5 h-5" />
                        </button>
                    </footer>
                </section>
            </main>
        </div>
    );
}

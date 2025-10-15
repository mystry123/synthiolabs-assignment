import React, { useState, useCallback, useMemo, useEffect } from "react";
import { ChatSidebar } from "./ChatSidebar";
import { ChatMain } from "./ChatMain";
import type { ChatMessage, ChatUser } from "./types";

// Mock data for demonstration
const mockUsers: ChatUser[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    role: "Medical Oncologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "What roles do regulatory affairs specialists...",
    isOnline: true,
  },
  {
    id: "2",
    name: "Sarah Patel",
    role: "Clinical Research Associate",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "How do clinical research associates con...",
    isOnline: false,
  },
  {
    id: "3",
    name: "Rajiv Kumar",
    role: "Pharmacologist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "What is the importance of pharmacologi...",
    isOnline: true,
  },
  {
    id: "4",
    name: "Linda Garcia",
    role: "Medical Science Liaison",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "How do medical science liaisons bridge...",
    isOnline: false,
  },
  {
    id: "5",
    name: "Dr. Sarah Khan",
    role: "Regulatory Affairs Specialist",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "What are the latest advancements in dr...",
    isOnline: true,
  },
  {
    id: "6",
    name: "Emily Thompson",
    role: "Clinical Data Manager",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "How do regulatory sponsors impact phar...",
    isOnline: false,
  },
  {
    id: "7",
    name: "David Li",
    role: "Biostatistician",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "What role do clinical trials play in the ap...",
    isOnline: true,
  },
  {
    id: "8",
    name: "Emma Chen",
    role: "Clinical Trial Coordinator",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
    lastMessage: "How are patients selected for clinical tri...",
    isOnline: false,
  },
    {
      id: "9",
      name: "Dr. Emily Chen",
      role: "Medical Oncologist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "What roles do regulatory affairs specialists...",
      isOnline: true,
    },
    {
      id: "10",
      name: "Sarah Patel",
      role: "Clinical Research Associate",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "How do clinical research associates con...",
      isOnline: false,
    },
    {
      id: "11",
      name: "Rajiv Kumar",  
      role: "Pharmacologist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "What is the importance of pharmacologi...",
      isOnline: true,
    },
    {
      id: "12",
      name: "Linda Garcia",
      role: "Medical Science Liaison",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "How do medical science liaisons bridge...",
      isOnline: false,
    },
    {
      id: "13",
      name: "Dr. Sarah Khan",
      role: "Regulatory Affairs Specialist",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "What are the latest advancements in dr...",
      isOnline: true,
    },
    {
      id: "14",
      name: "Emily Thompson",
      role: "Clinical Data Manager",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "How do regulatory sponsors impact phar...",
      isOnline: false,
    },
    {
      id: "15",
      name: "David Li",
      role: "Biostatistician",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "What role do clinical trials play in the ap...",
      isOnline: true,
    },
    {
      id: "16",
      name: "Emma Chen",
      role: "Clinical Trial Coordinator",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face",
      lastMessage: "How are patients selected for clinical tri...",
      isOnline: false,
    },
];

const mockMessages: ChatMessage[] = [
  {
    id: "1",
    senderId: "1",
    content:
      "For patients who are NPO (nothing by mouth) prior to a procedure or may have GI prep that could impact absorption, there isn’t a specific adjustment required for Zepzelca, since it’s administered as an intravenous infusion. Standard dosing can typically proceed as scheduled, but if the procedure timing overlaps with an infusion day, it’s generally recommended to coordinate with the GI and infusion teams to avoid conflicts.  If the patient is experiencing any significant changes in renal or hepatic function related to the procedure or prep, additional monitoring or dose adjustments may be warranted, in line with the prescribing information.",
    timestamp: new Date("2024-10-15T10:00:00"),
    isUser: false,
  },
  {
    id: "2",
    senderId: "1",
    content:
      "If the patient is experiencing any significant changes in renal or hepatic function related to the procedure or prep, additional monitoring or dose adjustments may be warranted, in line with the prescribing information.",
    timestamp: new Date("2024-10-15T10:02:00"),
    isUser: false,
  },
  {
    id: "3",
    senderId: "user",
    content:
      "What roles do regulatory affairs specialists play in drug approval?",
    timestamp: new Date("2024-10-15T10:05:00"),
    isUser: true,
  },
  {
    id: "4",
    senderId: "1",
    content:
      "For patients who are NPO (nothing by mouth) prior to a procedure or may have GI prep that could impact absorption, there isn't a specific adjustment required for Zepzelca, since it's administered as an intravenous infusion. Standard dosing can typically proceed as scheduled, but if the procedure timing overlaps with an infusion day, it's generally recommended to coordinate with the GI and infusion teams to avoid conflicts.",
    timestamp: new Date("2024-10-15T10:07:00"),
    isUser: false,
  },
  {
    id: "5",
    senderId: "1",
    content:
      "If the patient is experiencing any significant changes in renal or hepatic function related to the procedure or prep, additional monitoring or dose adjustments may be warranted, in line with the prescribing information.",
    timestamp: new Date("2024-10-15T10:08:00"),
    isUser: false,
  },
];

export const ChatInterface: React.FC = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");

  const selectedUser = useMemo(
    () => selectedUserId ? mockUsers.find((user) => user.id === selectedUserId) : undefined,
    [selectedUserId]
  );

  const handleUserSelect = useCallback((userId: string) => {
    setSelectedUserId(userId);
  }, []);

  const handleBackToSidebar = useCallback(() => {
    setSelectedUserId(null);
  }, []);

  const handleSendMessage = useCallback((content: string) => {
    if (!content.trim()) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      senderId: "user",
      content: content.trim(),
      timestamp: new Date(),
      isUser: true,
    };

    setMessages((prev) => [...prev, newMsg]);
    setNewMessage("");
  }, []);

  // Auto-select first user on large devices
  useEffect(() => {
    const checkScreenSize = () => {
      const isLargeDevice = window.innerWidth >= 768; // md breakpoint
      if (isLargeDevice && !selectedUserId && mockUsers.length > 0) {
        setSelectedUserId(mockUsers[0].id);
      }
    };

    // Check on mount
    checkScreenSize();

    // Check on resize
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [selectedUserId]);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] bg-transparent overflow-hidden">
      {/* Mobile: Hide sidebar when chat is selected, Desktop: Always show */}
      <div className={`${selectedUserId ? 'hidden md:flex' : 'flex'} md:flex w-[full]  md:w-[35%] lg:w-[25%]`}>
        <ChatSidebar
          users={mockUsers}
          selectedUserId={selectedUserId}
          onUserSelect={handleUserSelect}
        />
      </div>
      {/* Mobile: Show main when chat is selected, Desktop: Always show */}
      <div className={`${selectedUserId ? 'flex' : 'hidden md:flex'} flex-1`}>
        <ChatMain
          selectedUser={selectedUser}
          messages={messages}
          newMessage={newMessage}
          onNewMessageChange={setNewMessage}
          onSendMessage={handleSendMessage}
          onBackToSidebar={handleBackToSidebar}
        />
      </div>
    </div>
  );
};
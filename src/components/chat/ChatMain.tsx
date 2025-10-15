import React, { memo, useRef, useEffect } from "react";
import {
  Copy,
  Volume2,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  WandSparkles,
  Paperclip,
  ArrowUp,
  MessageSquare,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { ChatUser, ChatMessage } from "./types";

interface ChatMainProps {
  selectedUser: ChatUser | undefined;
  messages: ChatMessage[];
  newMessage: string;
  onNewMessageChange: (message: string) => void;
  onSendMessage: (message: string) => void;
  onBackToSidebar: () => void;
}
const MessageActions = memo(() => (
  <div className="flex items-center space-x-2 mb-4">
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <Copy size={12} />
    </button>
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <Volume2 size={12} />
    </button>
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <ThumbsUp size={12} />
    </button>
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <ThumbsDown size={12} />
    </button>
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <WandSparkles size={12} />
    </button>
    <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors duration-150">
      <RotateCcw size={12} />
    </button>
  </div>
));

const MessageBubble = memo<{
  message: ChatMessage;
  isUser: boolean;
}>(({ message, isUser }) => (
  <div className="flex flex-col">
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} py-3`}>
      <div
        className={` px-4 py-3 ${
          isUser
            ? "bg-[#4B7BFF] text-white rounded-[2rem] rounded-tr-none w-fit max-w-[80%] md:max-w-[40%]   text-right "
            : "bg-[#F6F6F6] text-black rounded-3xl rounded-tl-none w-fit max-w-full"
        }`}
      >
        <p
          className={
            isUser
              ? "text-lg leading-relaxed whitespace-pre-wrap text-white"
              : "text-lg leading-relaxed whitespace-pre-wrap text-gray-700"
          }
        >
          {message.content}
        </p>
      </div>
    </div>
    {!isUser && <MessageActions />}
  </div>
));

MessageBubble.displayName = "MessageBubble";

MessageActions.displayName = "MessageActions";

export const ChatMain: React.FC<ChatMainProps> = memo(
  ({
    selectedUser,
    messages,
    newMessage,
    onNewMessageChange,
    onSendMessage,
    onBackToSidebar,
  }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom when messages change
    useEffect(() => {
      const scrollToBottom = () => {
        if (messagesEndRef.current) {
          const messagesContainer = messagesEndRef.current.parentElement;
          if (messagesContainer) {
            messagesContainer.scrollTo({
              top: messagesContainer.scrollHeight,
              behavior: "smooth",
            });
          }
        }
      };

      // Use setTimeout to ensure DOM is updated
      const timeoutId = setTimeout(scrollToBottom, 100);

      return () => clearTimeout(timeoutId);
    }, [messages.length]); // Trigger when new messages are added

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSendMessage(newMessage);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        onSendMessage(newMessage);
      }
    };

    if (!selectedUser) {
      return (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      );
    }

    return (
      <div className="flex-1 flex flex-col bg-white h-full relative md:rounded-tl-xl md:rounded-tr-xl overflow-hidden">
        {/* Header */}
        <div className="p-3 md:p-4 border-b border-gray-200 bg-white flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-3 min-w-0">
              {/* Back button - only visible on mobile */}
              <Button
                onClick={onBackToSidebar}
                variant="attachment"
                size="icon"
                className="md:hidden p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors duration-150 flex-shrink-0"
                aria-label="Back to chat list"
              >
                <ArrowLeft size={20} />
              </Button>
              <div className="relative flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=40&h=40&fit=crop&crop=face"
                  alt={selectedUser.name}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-base md:text-lg text-gray-900 truncate">
                  {selectedUser.name}
                </h3>
                <p className="text-sm md:text-md text-gray-400 truncate">
                  {selectedUser.role}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
              <Button
                variant="attachment"
                size="icon"
                className="p-1.5 md:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full border"
              >
                <MessageSquare size={16} className="text-black" />
              </Button>
              <Button
                variant="attachment"
                size="icon"
                className="p-1.5 md:p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full border"
              >
                <Phone size={16} className="text-black" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col overflow-y-auto px-3 md:px-6 pb-32 md:pb-48 pt-4 md:pt-8 space-y-1 min-h-0 mx-2 md:mx-8 scrollbar-hide">
          {messages.map((message) => (
            <MessageBubble
              key={message.id}
              message={message}
              isUser={message.isUser}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 pointer-events-none bg-white mx-2 md:mx-6" />

        {/* Message Input */}
        <div className="absolute bottom-12 md:bottom-16 left-0 right-0 p-3 md:p-4 bg-white flex-shrink-0 rounded-xl mx-2 md:mx-6 border border-[#EEEEEE] shadow-lg">
          <form onSubmit={handleSubmit} className="flex items-center space-x-3">
            <div className="flex w-full flex-col space-y-2">
              <Input
                type="text"
                value={newMessage}
                onChange={(e) => onNewMessageChange(e.target.value)}
                onKeyPress={handleKeyPress}
                className="p-0 rounded-none"
                placeholder="What roles do regulatory affairs specialists play in drug approval?"
              />
              <div className="flex w-full items-center justify-between">
                <Button
                  variant="attachment"
                  type="button"
                  size="icon"
                  onClick={() => {
                    // Handle file attachment
                    const input = document.createElement("input");
                    input.type = "file";
                    input.multiple = true;
                    input.accept =
                      "image/*,video/*,audio/*,.pdf,.doc,.docx,.txt";
                    input.onchange = (e) => {
                      const files = (e.target as HTMLInputElement).files;
                      if (files) {
                      }
                    };
                    input.click();
                  }}
                >
                  <Paperclip size={16} className="text-black" />
                </Button>
                <Button
                  variant="send"
                  type="submit"
                  size="icon"
                  disabled={!newMessage.trim()}
                >
                  <ArrowUp size={16} />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
);

ChatMain.displayName = "ChatMain";

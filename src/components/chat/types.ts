export interface ChatUser {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  isOnline: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  isUser: boolean;
}

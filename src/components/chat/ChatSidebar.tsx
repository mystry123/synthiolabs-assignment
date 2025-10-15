import React, { memo } from "react";
import { SquarePen } from "lucide-react";
import type { ChatUser } from "./types";

interface ChatSidebarProps {
  users: ChatUser[];
  selectedUserId: string | null;
  onUserSelect: (userId: string) => void;
}

const UserListItem = memo<{
  user: ChatUser;
  isSelected: boolean;
  onSelect: () => void;
}>(({ user, isSelected, onSelect }) => (
  <button
    onClick={onSelect}
    className={`w-[95%] rounded-xl p-3 text-left hover:bg-gray-50 ${
      isSelected
        ? "bg-[#EBF0FF]  border-b border-[#EEEEEE] hover:bg-[#EBF0FF]"
        : " border-b border-[#EEEEEE] rounded-none"
    }`}
  >
    <div className="flex items-center space-x-2">
      <div className="relative flex-shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h3 className="text-lg text-gray-900 truncate">{user.name}</h3>
        </div>
        <p className="text-md text-gray-400 truncate">{user.lastMessage}</p>
      </div>
    </div>
  </button>
));

UserListItem.displayName = "UserListItem";

export const ChatSidebar: React.FC<ChatSidebarProps> = memo(
  ({ users, selectedUserId, onUserSelect }) => {
    return (
      <div className="w-full bg-transparent flex flex-col pb-10">
        {/* Header */}
        <div className="p-4 my-1 flex-shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Chats
            </h2>
            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
              <SquarePen size={24} strokeWidth={1} className="text-black" />
            </button>
          </div>
        </div>

        {/* User List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide min-h-0">
          {users.map((user) => (
            <UserListItem
              key={user.id}
              user={user}
              isSelected={selectedUserId === user.id}
              onSelect={() => onUserSelect(user.id)}
            />
          ))}
        </div>
      </div>
    );
  }
);

ChatSidebar.displayName = "ChatSidebar";

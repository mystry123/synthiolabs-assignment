import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type TabValue = 'dashboard' | 'insights' | 'transcript' | 'chat';

interface NavigationContextType {
  activeTab: TabValue;
  setActiveTab: (tab: TabValue) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabValue>('chat');

  return (
    <NavigationContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

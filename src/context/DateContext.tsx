import { createContext, useState, ReactNode } from 'react';
import { getTodayDateStr } from '../utils/getTodayDateStr';

export interface SelectedDateContextProps {
  selectedDate: string | null;
  setSelectedDate: (date: string | null) => void;
}

export const SelectedDateContext = createContext<SelectedDateContextProps | undefined>(undefined);

export const SelectedDateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(getTodayDateStr());

  return (
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  );
};

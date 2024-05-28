import { useContext } from 'react';
import { SelectedDateContext, SelectedDateContextProps } from '../context/DateContext';

export const useSelectedDate = (): SelectedDateContextProps => {
  const context = useContext(SelectedDateContext);

  if (!context) {
    throw new Error('useSelectedDate must be used within a SelectedDateProvider');
  }

  return context;
};

export const getDayName = (dateStr: string): string => {
  const date = new Date(dateStr);
  const dayOfWeek = date.getDay();

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return dayNames[dayOfWeek];
};

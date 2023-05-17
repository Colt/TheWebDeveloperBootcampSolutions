function returnDay(num) {
  if (num < 1 || num > 7) {
    return null;
  }
  const days = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
  };
  return days[num];
}
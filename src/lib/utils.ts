import { ClassValue, clsx } from 'clsx';
import moment from 'moment';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeDifference() {
  const startDate = moment('2022-09-01 08:30', 'YYYY-MM-DD HH:mm');
  const now = moment();
  const years = now.diff(startDate, 'years');
  const days = now.diff(startDate.add(years, 'years'), 'days');
  const hours = now.diff(startDate.add(days, 'days'), 'hours');

  return `${years} years, ${days} days and ${hours} hours`;
}

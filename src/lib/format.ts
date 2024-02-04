import { format, isSameMonth, isSameYear } from 'date-fns';
import { id } from 'date-fns/locale';

export const formatDate = (date: Date, formatStr = 'PPP') => {
  return format(date, formatStr, {
    locale: id,
  });
};

export const formatDateRange = (startDate: Date, endDate: Date) => {
  if (isSameMonth(startDate, endDate) && isSameYear(startDate, endDate)) {
    return `${formatDate(startDate, 'd')} - ${formatDate(
      endDate,
      'd'
    )} ${formatDate(startDate, 'MMMM yyyy')}`;
  } else {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
};

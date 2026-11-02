export const formatDate = (dateString: string): string => {
  return dateString;
};

export const padZero = (num: number, size = 2): string => {
  let s = num + '';
  while (s.length < size) s = '0' + s;
  return s;
};

export const truncate = (str: string, maxLen = 120): string => {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + '...';
};

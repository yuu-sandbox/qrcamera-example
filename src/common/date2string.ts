import moment from 'moment';

// e.g.: 2000/1/1
export const date2str = (date?: Date): string => {
  if (date == null) {
    return '---/--/--';
  }

  return moment(date).format('YYYY-MM-DD');
};

export const date2strdate = (date?: Date): string => {
  if (date === undefined) {
    return 'undefined';
  }
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}/${day}`;
};

export const str2date = (str: string | null | undefined): Date | null => {
  if (str === null || str === undefined) {
    return null;
  }

  const ret = new Date(str);
  if (isNaN(ret.getTime())) {
    return null;
  }

  return ret;
};

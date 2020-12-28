const monthThai = [
  {
    full: 'มกราคม',
    short: 'ม.ค.',
  },
  {
    full: 'กุมภาพันธ์',
    short: 'ก.พ.',
  },
  {
    full: 'มีนาคม',
    short: 'มี.ค.',
  },
  {
    full: 'เมษายน',
    short: 'เม.ย.',
  },
  {
    full: 'พฤษภาคม',
    short: 'พ.ค.',
  },
  {
    full: 'มิถุนายน',
    short: 'มิ.ย.',
  },
  {
    full: 'กรกฎาคม',
    short: 'ก.ค.',
  },
  {
    full: 'สิงหาคม',
    short: 'ส.ค.',
  },
  {
    full: 'กันยายน',
    short: 'ก.ย.',
  },
  {
    full: 'ตุลาคม',
    short: 'ต.ค.',
  },
  {
    full: 'พฤศจิกายน',
    short: 'พ.ย.',
  },
  {
    full: 'ธันวาคม',
    short: 'ธ.ค.',
  },
];

export const formatFullThai = (dateStr) => {
  const dateObj = new Date(dateStr);
  const year = dateObj.getFullYear() + 543;
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  return `${date} ${monthThai[month].full} ${year}`;
};

const monthNames = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

type ConvertDate = 'dd/mm/yyyy' | 'dd mm' | 'dd mm HH:mm';

export const convertDate = (params: Date, type?: ConvertDate) => {
  const date = new Date(params);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours()
  const minute = date.getMinutes()

  let res = '';
  switch (type) {
    case 'dd/mm/yyyy':
      res = `${day}/${month}/${year}`;
      break;
    case 'dd mm':
      res = `${day} ${month}`;
      break;
    case 'dd mm HH:mm':
      res = `${day} ${monthNames[month]} ${hour}:${minute}`;
      break;
    default:
      res = `${day}-${month}-${year}`;
      break;
  }

  return res;
};

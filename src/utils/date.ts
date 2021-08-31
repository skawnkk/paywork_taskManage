const getDateInfo = (date: string) => {
  const dateObject = new Date(date);
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  return [
    dateObject.getFullYear() - 2000,
    dateObject.getMonth() + 1,
    dateObject.getDate(),
    day[dateObject.getDay()],
  ];
};
export const changeDateFormat = (dateString: string) => {
  const [year, month, date, day] = getDateInfo(dateString);
  return `${year}년 ${month}월 ${date}일 (${day})`;
};

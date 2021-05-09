export const filterByText = (
  phrase: string,
  data: any[],
  filterKey?: string
) => {
  return data.filter((item) =>
    filterKey
      ? item[filterKey].toLowerCase().includes(phrase.toLowerCase())
      : item.toLowerCase().includes(phrase.toLowerCase())
  );
};

export const getRandomArrayItem = (array: any[]): any => {
  return array[Math.floor(Math.random() * array.length)];
};

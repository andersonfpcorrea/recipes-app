export const setSearchOnLocalStorage = (value: Array<Object>) => {
  const json = localStorage.getItem('search');
  const prevData = json ? JSON.parse(json) : undefined;
  const newData = prevData ? [...prevData, ...value] : [...value];
  localStorage.setItem('search', JSON.stringify(newData));
};

export const getSearchFromLocalStorage = (setter: Function) => {
  const json = localStorage.getItem('search');
  const data = json ? JSON.parse(json) : null;
  console.log(data);
  data && setter(data);
};

export const setSearchOnLocalStorage = (key: string, value: Object) => {
  const json = localStorage.getItem(key);
  console.log(json);

  const prevData = json ? JSON.parse(json) : undefined;
  const newData = prevData ? { ...prevData, ...value } : { ...value };
  console.log(newData);
  localStorage.setItem(key, JSON.stringify(newData));
};

export const getSearchFromLocalStorage = (setter: Function) => {
  const json = localStorage.getItem('search');
  console.log(json);

  // const data = json ? JSON.parse(json) : null;
  // const obj = {
  //   lastSearch: data,
  //   errorMsg: '',
  // };
  // console.log(obj);

  // data && setter(data);
};

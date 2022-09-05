export const setSearchOnLocalStorage = (key: string, value: Object) => {
  const json = localStorage.getItem(key);
  const prevData = json ? JSON.parse(json) : undefined;
  const newData = prevData ? { ...prevData, ...value } : { ...value };
  console.log(newData);
  localStorage.setItem(key, JSON.stringify(newData));
};

export const getFromLocalStorage = (stateKey: string, setter: Function) => {
  const json = localStorage.getItem(stateKey);
  const data = json ? JSON.parse(json) : undefined;
  data && setter(data);
};

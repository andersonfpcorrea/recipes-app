import { PredicateFunction, ObjForEach } from './interfaces';

export const setSearchOnLocalStorage = (value: Array<Object>) => {
  // const json = localStorage.getItem('search');
  // const prevData = json ? JSON.parse(json) : undefined;
  // const newData = prevData ? [...prevData, ...value] : [...value];
  localStorage.setItem('search', JSON.stringify(value));
};

export const getSearchFromLocalStorage = (setter: Function) => {
  const json = localStorage.getItem('search');
  const data = json ? JSON.parse(json) : null;
  data && setter(data);
};

export const objForEach = (obj: ObjForEach, predicate: PredicateFunction) => {
  let results: ObjForEach = {};
  const keys = Object.keys(obj);
  keys.forEach((key: string) => {
    if (predicate(key, obj[key])) results[key] = obj[key];
  });
  return results;
};

export const mapObjValuesToArray = (obj: ObjForEach) => {
  let results: Array<any> = [];
  const keys = Object.keys(obj);
  keys.forEach((key: string) => results.push(obj[key]));
  return results;
};

export const mapObjKeysToArray = (obj: ObjForEach) => {
  let results: Array<string> = [];
  const keys = Object.keys(obj);
  keys.forEach((key: string) => results.push(key));
  return results;
};

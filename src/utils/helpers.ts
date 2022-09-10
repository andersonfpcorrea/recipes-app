import { PredicateFunction, ObjForEach } from './interfaces';
import { countries } from '../data/countries';
import { Dispatch } from 'react';

type ArrayOfObjects = [Record<string, unknown>];

export const setSearchOnLocalStorage = (value: ArrayOfObjects) => {
  // const json = localStorage.getItem('search');
  // const prevData = json ? JSON.parse(json) : undefined;
  // const newData = prevData ? [...prevData, ...value] : [...value];
  localStorage.setItem('search', JSON.stringify(value));
};

export const getSearchFromLocalStorage = (
  setter: Dispatch<ArrayOfObjects | null>
) => {
  const json = localStorage.getItem('search');
  const data = json ? (JSON.parse(json) as ArrayOfObjects) : null;
  data && setter(data);
};

export const objForEach = (obj: ObjForEach, predicate: PredicateFunction) => {
  const results: Record<string, unknown> = {};
  const keys = Object.keys(obj);
  keys.forEach((key: string) => {
    if (predicate(key, obj[key])) results[key] = obj[key];
  });
  return results;
};

export const mapObjValuesToArray = (obj: Record<string, unknown>) => {
  const results: Array<unknown> = [];
  const keys = Object.keys(obj);
  keys.forEach((key: string) => results.push(obj[key]));
  return results as Array<string>;
};

export const mapObjKeysToArray = (obj: ObjForEach) => {
  const results: Array<string> = [];
  const keys = Object.keys(obj);
  keys.forEach((key: string) => results.push(key));
  return results;
};

export const getFlag = (area: string) =>
  countries.find((el) => el.demonyms.eng.f === area)?.flags.svg;

import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getSearchFromLocalStorage } from '../utils/helpers';
import { SearchPageStateInterface } from '../utils/interfaces';

export type AppContextInterface = {
  searchPageState: SearchPageStateInterface;
  setSearchPageState: Function;
};

export const AppContext = createContext<AppContextInterface>({
  searchPageState: [],
  setSearchPageState: () => {},
});

// FIXME: Fix the type of AppProvider.
export const AppProvider: React.FC | any = ({
  children,
}: React.PropsWithChildren) => {
  const [searchPageState, setSearchPageState] =
    useState<SearchPageStateInterface>([]);

  // useEffect(() => {
  //   getSearchFromLocalStorage(setSearchPageState);
  // }, []);

  const appStore: AppContextInterface = { searchPageState, setSearchPageState };

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { SearchPageStateInterface } from '../utils/interfaces';

export type AppContextInterface = {
  searchPageState: SearchPageStateInterface | null;
  setSearchPageState: Function;
};

export const AppContext = createContext<AppContextInterface>({
  searchPageState: { lastSearch: null, errorMsg: '' },
  setSearchPageState: () => {},
});

export const AppProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  const [searchPageState, setSearchPageState] =
    useState<SearchPageStateInterface>({
      lastSearch: null,
      errorMsg: '',
    });

  useEffect(() => console.log(searchPageState), [searchPageState]);

  const appStore: AppContextInterface = { searchPageState, setSearchPageState };

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

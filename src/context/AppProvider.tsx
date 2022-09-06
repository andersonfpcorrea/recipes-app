import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getSearchFromLocalStorage } from '../utils/helpers';
import { SearchResultStateInterface } from '../utils/interfaces';

export type AppContextInterface = {
  searchResultState: SearchResultStateInterface;
  setSearchResultState: Function;
  searchPageMessage: string;
  setSearchPageMessage: Function;
};

export const AppContext = createContext<any>(null);

// FIXME: Fix the type of AppProvider.
export const AppProvider: React.FC | any = ({
  children,
}: React.PropsWithChildren) => {
  const [searchResultState, setSearchResultState] =
    useState<SearchResultStateInterface>([]);
  const [searchPageMessage, setSearchPageMessage] = useState('');

  const appStore: AppContextInterface = {
    searchResultState,
    setSearchResultState,
    searchPageMessage,
    setSearchPageMessage,
  };

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>;
};

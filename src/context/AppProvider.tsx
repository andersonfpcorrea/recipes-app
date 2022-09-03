import React, { ReactComponentElement, useEffect, useState } from 'react';
import { createContext } from 'react';

const DEFAULT_STORE = {
  searchHistory: [{}],
  setSearchHistory(value: Array<Object>) {
    DEFAULT_STORE.searchHistory = [...this.searchHistory, ...value];
  },
};

export const AppContext = createContext(DEFAULT_STORE);

export const AppProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  console.log(children);

  const [searchHistory, setSearchHistory] = useState<Array<Object>>([{}]);

  useEffect(() => console.log(searchHistory), [searchHistory]);

  const store = { searchHistory, setSearchHistory };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

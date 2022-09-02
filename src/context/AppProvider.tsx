import React, { useState } from 'react';
import { createContext } from 'react';

const init = {
  searchHistory: [{}],
  setSearchHistory(value: Array<Object>) {
    this.searchHistory = value;
  },
};

export const AppContext = createContext(init);

export const AppProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  const [searchHistory, setSearchHistory] = useState<Array<Object>>([]);

  const store = { searchHistory, setSearchHistory };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

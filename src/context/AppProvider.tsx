import React, { useEffect, useState } from 'react';
import { createContext } from 'react';

const init = {
  searchHistory: [{}],
  setSearchHistory(value: Array<Object>) {
    init.searchHistory = [...this.searchHistory, ...value];
  },
};

export const AppContext = createContext(init);

export const AppProvider: React.FC = ({
  children,
}: React.PropsWithChildren) => {
  const [searchHistory, setSearchHistory] = useState<Array<Object>>([{}]);

  useEffect(() => console.log(searchHistory), [searchHistory]);

  const store = { searchHistory, setSearchHistory };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

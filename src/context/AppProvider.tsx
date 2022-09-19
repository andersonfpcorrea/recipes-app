import React, { Dispatch, useState } from 'react'
import { createContext } from 'react'
import {
  ObjectWithStrKeysAndStrNullValues,
  SearchResultStateInterface,
} from '../utils/interfaces'

export type AppContextInterface = {
  searchResultState: SearchResultStateInterface | []
  setSearchResultState: Dispatch<[ObjectWithStrKeysAndStrNullValues] | []>
  searchPageMessage: string
  setSearchPageMessage: Dispatch<string>
}

export const AppContext = createContext<AppContextInterface>({
  searchResultState: [],
  setSearchResultState: () => undefined,
  searchPageMessage: '',
  setSearchPageMessage: () => undefined,
})

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: React.PropsWithChildren) => {
  const [searchResultState, setSearchResultState] =
    useState<SearchResultStateInterface>([])
  const [searchPageMessage, setSearchPageMessage] = useState('')

  const appStore: AppContextInterface = {
    searchResultState,
    setSearchResultState,
    searchPageMessage,
    setSearchPageMessage,
  }

  return <AppContext.Provider value={appStore}>{children}</AppContext.Provider>
}

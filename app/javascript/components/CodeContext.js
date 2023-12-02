import React, { createContext, useState } from 'react';

export const CodeContext = createContext();
export const CodeProvider = ({children}) => {
  const [redeemedCodes, setRedeemedCodes] = useState([]);
  const addRedeemedCodes = (code) => {
    setRedeemedCodes([...redeemedCodes, code]);
  }
  return (
    <CodeContext.Provider value={{redeemedCodes, addRedeemedCodes}}>
      {children}
    </CodeContext.Provider>
  )
}
import React, { createContext, useState } from 'react';

export const CodeContext = createContext();
export const CodeProvider = ({children}) => {
  const [redeemedCodes, setRedeemedCodes] = useState([]);
  const addRedeemedCode = (redeemedCode) => {
    setRedeemedCodes([...redeemedCodes, redeemedCode]);
  }
  return (
    <CodeContext.Provider value={{redeemedCodes, addRedeemedCode}}>
      {children}
    </CodeContext.Provider>
  )
}
import React, { createContext, useState } from 'react';

export const CodeContext = createContext();
export const CodeProvider = ({children}) => {
  const [claimedCodes, setClaimedCodes] = useState([]);
  const addRedeemedCodes = (claimedCode) => {
    setClaimedCodes([...claimedCodes, claimedCode]);
  }
  return (
    <CodeContext.Provider value={{claimedCodes, addRedeemedCodes}}>
      {children}
    </CodeContext.Provider>
  )
}
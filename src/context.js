import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 const [gameState, setGameState] = useState("menu");
 const [score, setScore] = useState(0);

  return (
  <AppContext.Provider 
  value={{ gameState,
    setGameState,
    score,
    setScore
   }}
   >
  {children}
  </AppContext.Provider>
  )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [storeData, setStoreData] = useState([]);

  const handleStoreData = (storeData) => {
    setStoreData(storeData);
  };

  const contextProps = {
    storeData,
    handleStoreData,
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

import { createContext, useContext, useState, useEffect } from "react";
import { routines } from "./Data";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [list, setList] = useState(routines);

  const LOCAL_STORAGE_KEY = "appData.journal";

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(storedData);
    if (storedData) setList(storedData);
  }, []);

  useEffect(() => {
    console.log(list);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    console.log(localStorage);
  }, [list]);

  return (
    <GlobalContext.Provider value={{ list, setList }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

import { createContext, useContext, useState, useEffect } from 'react';
import { routines } from './Data';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [list, setList] = useState([]);

  const LOCAL_STORAGE_KEY = 'appData.journal';

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedData) setList(storedData);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
    }
  }, [list]);

  return (
    <GlobalContext.Provider value={{ list, setList }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default AppContext;

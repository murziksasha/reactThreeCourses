import { useState, createContext, useContext } from "react";


const AlertContext = createContext();
const AlertToggleContext = createContext();


export const useAlert = () => {
  return useContext(AlertContext)
}

export const useAlertToggle = () => {
  return useContext(AlertToggleContext)
}

const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState(false);
  const toggle = () => setAlert(prevValue => !prevValue);

  return (
    <AlertContext.Provider value={alert}>
      <AlertToggleContext.Provider value={toggle}>
        {children}
      </AlertToggleContext.Provider>
    </AlertContext.Provider>
  )
}

export default AlertProvider;
import { ReactNode, createContext, useState } from 'react'

type UserContextProps =  {
   children: ReactNode
}

type UserContextType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  showRealModal: boolean;
  setShowRealModal: (showRealModal: boolean) => void;
  showBoxes: boolean,
  setShowBoxes: (showBoxes: boolean) => void;
};

const defaultValue: UserContextType = {
  showModal: false,
  setShowModal: () => {},
  showRealModal: false,
  setShowRealModal: () => {},
  showBoxes: false,
  setShowBoxes: () => {}
};


export const UserContext = createContext(defaultValue);


const UserProvider = ({ children}: UserContextProps) => {

    const [showModal, setShowModal] = useState(false);
    const [showRealModal, setShowRealModal] = useState(false);
    const [showBoxes, setShowBoxes] = useState(true);
    

    return <UserContext.Provider value = {{showModal,
     setShowModal, showRealModal,setShowRealModal, showBoxes, setShowBoxes}} >
      {children}
    </UserContext.Provider>


}


export default UserProvider
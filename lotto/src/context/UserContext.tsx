import { ReactNode, createContext, useState } from 'react'

type UserContextProps =  {
   children: ReactNode
}

type UserContextType = {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
};

const defaultValue: UserContextType = {
  showModal: false,
  setShowModal: () => {} 
};


export const UserContext = createContext(defaultValue);


const UserProvider = ({ children}: UserContextProps) => {

    const [showModal, setShowModal] = useState(false);

    return <UserContext.Provider value = {{showModal, setShowModal}} >
      {children}
    </UserContext.Provider>


}


export default UserProvider
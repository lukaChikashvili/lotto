import { ReactNode, createContext } from 'react'

type UserContextProps =  {
   children: ReactNode
}

let defaultValue = {};
export const UserContext = createContext(defaultValue);


const UserProvider = ({ children}: UserContextProps) => {



    return <UserContext.Provider value = {{}} >
      {children}
    </UserContext.Provider>


}


export default UserProvider
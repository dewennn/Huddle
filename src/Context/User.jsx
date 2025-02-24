import { createContext, useState } from "react";

export const UserContext = createContext({
  username: '',
  setUsername: () => {}
})

export default function UserContextProvider({children}){
  const[username, setUsername] = useState("")
  const ctxValue = {username, setUsername}

  return <UserContext.Provider value={ctxValue}>{children}</UserContext.Provider>
}
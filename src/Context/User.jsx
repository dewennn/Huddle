import { createContext, useState } from "react";
import { serverAddress } from "../data";

export const UserContext = createContext({
  username: '',
  setUsername: () => {},
  fetchUserData: () => {}
})

export default function UserContextProvider({children}){
  const[user, setUser] = useState({})

  const fetchUserData = async () => {
    try {
      const response = await fetch(serverAddress + '/api/user/me', {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })  

      if(!response.ok) throw new Error("Failed to fetch user data")
      
      const data = await response.json()
      setUser(data)
    }
    catch (error) {
      console.error("Error fetching user data: ", error)
    }
  }

  return <UserContext.Provider value={{user, setUser, fetchUserData}}>{children}</UserContext.Provider>
}
import { createContext, useState } from "react";

export const UserContext = createContext({
  username: '',
  setUsername: () => {},
  fetchUserData: () => {}
})

export default function UserContextProvider({children}){
  const[username, setUsername] = useState("")

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
      setUsername(data["username"])
    }
    catch (error) {
      console.error("Error fetching user data: ", error)
    }
  }

  return <UserContext.Provider value={{username, setUsername, fetchUserData}}>{children}</UserContext.Provider>
}
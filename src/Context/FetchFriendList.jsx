import { createContext, useState } from "react";
import { serverAddress } from "../data";

export const FetchFriendList = createContext({
  friends: [],
  setFriendList: () => {},
  fetchFriends: () => {}
})

export default function FetchFriendListProvider({children}){
  // FRIEND LIST STATE
    const[friends, setFriends] = useState([])
  
  // FETCH FUNCTION
    const fetchFriends = async () => {
      try {
        const response = await fetch(serverAddress + '/api/user/friends', {
          method: 'GET',
          credentials: 'include',
          headers: {
            "Content-Type": "application/json"
          }
        })

        if(!response.ok) throw new Error("Failed to fetch user friends")

        const data = await response.json()

        setFriends(data)
        console.log(data)
      } catch (error) {
        console.error("Error fetching user data: ", error)
      }
    }
  
  return <FetchFriendList.Provider value={{friends, setFriends, fetchFriends}}>{children}</FetchFriendList.Provider>
}
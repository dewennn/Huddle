import { createContext, useState } from "react"
import { serverAddress } from "../data"

export const FetchFriendRequests = createContext({
  friendRequests: [],
  setFriendRequests: () => {},
  fetchSentFriendRequest: () => {}
})

export default function FetchFriendRequestProvider({children}){
  const[friendRequests, setFriendRequests] = useState([])

  const fetchSentFriendRequest = async () => {
    try {
      const response = await fetch(serverAddress + '/api/user/sent_friend_requests', {
        method: 'GET',
        credentials: 'include'
      })

      if(!response.ok) throw new Error("Failed to fetch user friends")

      const data = await response.json()
      
      setFriendRequests(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <FetchFriendRequests.Provider value={{friendRequests, setFriendRequests, fetchSentFriendRequest}}>{children}</FetchFriendRequests.Provider>
}
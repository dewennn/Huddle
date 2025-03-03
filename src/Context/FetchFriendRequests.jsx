import { createContext, useState } from "react"
import { serverAddress } from "../data"

export const FetchFriendRequests = createContext({
  sentFriendRequests: [],
  setFriendRequests: () => {},
  receivedFriendRequests: [],
  setReceivedFriendRequests: () => {},

  fetchSentFriendRequest: () => {},
  fetchReceivedFriendRequest: () => {}
})

export default function FetchFriendRequestProvider({children}){
  const[sentFriendRequests, setSentFriendRequests] = useState([])
  const[receivedFriendRequests, setReceivedFriendRequests] = useState([])

  const fetchSentFriendRequest = async () => {
    try {
      const response = await fetch(serverAddress + '/api/user/sent_friend_requests', {
        method: 'GET',
        credentials: 'include'
      })

      if(!response.ok) throw new Error("Failed to fetch user sent friend requests")

      const data = await response.json()
      
      setSentFriendRequests(data)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchReceivedFriendRequest = async () => {
    try {
      const response = await fetch(serverAddress + '/api/user/received_friend_requests', {
        method: 'GET',
        credentials: 'include'
      })

      if(!response.ok) throw new Error("Failed to fetch user friends received friend requests")

      const data = await response.json()
      
      setReceivedFriendRequests(data)
    } catch (error) {
      console.log(error)
    }
  }

  return <FetchFriendRequests.Provider value={
    { sentFriendRequests,
      setSentFriendRequests,
      receivedFriendRequests,
      setReceivedFriendRequests,
      fetchSentFriendRequest,
      fetchReceivedFriendRequest
    }}>{children}</FetchFriendRequests.Provider>
}
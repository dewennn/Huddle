import { createContext, useState } from "react";

export const TokenContext = createContext({
  jwt: '',
  setJwt: () => {}
})

export default function TokenContextProvider({children}){
  const[token, setToken] = useState('')
  const ctxValue = {token, setToken}

  return <TokenContext.Provider value={ctxValue}>{children}</TokenContext.Provider>
}
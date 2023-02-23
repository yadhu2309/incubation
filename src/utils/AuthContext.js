import jwt_decode from 'jwt-decode'
import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

function AuthProvider({children}) {
    let [company,setCompany] = React.useState([])
    let [slotCheck,setSlotCheck] =useState([])
   let [authTokens,setAuthTokens] 
   
   = useState(()=>localStorage.getItem('authTokenUser')? JSON.parse(localStorage.getItem('authTokenUser')):null)
   let [user,setUser] = useState(()=>localStorage.getItem('authTokenUser')?jwt_decode(localStorage.getItem('authTokenUser')):null)

   let [authTokensAdmin,setAuthTokensAdmin] = useState(()=>localStorage.getItem('authTokenAdmin')? JSON.parse(localStorage.getItem('authTokenAdmin')):null)
   let [admin,setAdmin] = useState(()=>localStorage.getItem('authTokenAdmin')?jwt_decode(localStorage.getItem('authTokenAdmin')):null)

  return (
    // <div>AuthContext</div>
    <AuthContext.Provider value={{authTokens,setAuthTokens,user,setUser,company,setCompany,slotCheck,setSlotCheck,authTokensAdmin,setAuthTokensAdmin,admin,setAdmin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
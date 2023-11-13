import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebaseConfig"

 export const Authcontex = createContext(null)
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)


    // register
 const regisster =( email, password)=>{
  setloading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
// sign out
const logout = ()=>{
  setloading(true)
return signOut(auth)
}

// login
const logins =(email,password)=>{
  setloading(true)
  return signInWithEmailAndPassword(auth,email,password)
}

    useEffect(()=>{
      const unsubcriber = onAuthStateChanged(auth, (currect) => {
        
         setuser(currect)
         setloading(false)
  
    })
      return ()=>{
          return unsubcriber()
      }
  },[])



    const info = {user,loading,logins,regisster,logout}
  return (
    <Authcontex.Provider value={info}>
          {children}
    </Authcontex.Provider>
  )
}

export default Authprovider
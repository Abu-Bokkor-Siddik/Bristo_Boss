import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebaseConfig"
import useAxiosP from "../Hooks/useAxiosP"

 export const Authcontex = createContext(null)
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)

    // AxiosP
    const AxiosP =useAxiosP();


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
// google korbo 
const provider = new GoogleAuthProvider();

const google =()=>{
    setloading(true)
    return signInWithPopup(auth,provider)
}

const profile =(name)=>{
  setloading(true)
  return updateProfile(auth.currentUser, {
      displayName:name
      
    })

}



// login
const logins =(email,password)=>{
  setloading(true)
  return signInWithEmailAndPassword(auth,email,password)
}






    useEffect(()=>{
      const unsubcriber = onAuthStateChanged(auth, (currect) => {
        
         setuser(currect)
         if(currect){
          const userinfo = {email:currect?.email}
          AxiosP.post('/jwt',userinfo)
          .then(res => {
            console.log(res.data.token)
            if(res.data.token){
              localStorage.setItem('access-token',res.data.token)
            }
          })

         }else{
          //  do somethings 
          localStorage.removeItem('access-token')
         }
         setloading(false)
  
    })
      return ()=>{
          return unsubcriber()
      }
  },[AxiosP])



    const info = {user,loading,logins,regisster,logout,google,profile}
  return (
    <Authcontex.Provider value={info}>
          {children}
    </Authcontex.Provider>
  )
}

export default Authprovider
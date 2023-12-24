import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/auth';
 

export const AuthContext =  createContext();

export const AuthProvider = ({children} )=>{
   
    const [currentUser,setCurrentUser] = useState(null)
    const [loading,setLoading] = useState(null)
     
    useEffect(()=>{
        
        console.log(auth,'haaaaaaai')
        onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoading(false)
            console.log(user,'haaaaaaaaaaaaaaaaaaaaaaaaaaaaaai')
        })
         
    },[])
    return (
         
        <AuthContext.Provider value={{currentUser}} >
            {children}
        </AuthContext.Provider>
         
      );
};
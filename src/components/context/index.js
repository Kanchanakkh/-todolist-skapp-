import React, {useState,useEffect} from 'react'
import { SkynetClient } from 'skynet-js';

const MyContext = React.createContext()

const MyProvider = (props) =>{
    
    const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
    const client = new SkynetClient(portal);
    
    const [loggedIn, setLoggedIn] = useState(null);
    const [userID, setUserID] = useState();
    const [mySky, setMySky] = useState();
    // const dataDomain = 'localhost';
    const [filePath, setFilePath] = useState('');
      
      
      useEffect(() => {
        setFilePath(portal+ '/' + 'TodolistSkApp');
      }, []);
    
 
    return(
        <>
        <MyContext.Provider value={{
           loggedIn,
           setLoggedIn,
           userID,
           setUserID,
           mySky,
           setMySky,
        //    dataDomain,
           portal,
           client,
           filePath

        }}>

            {props.children}
        </MyContext.Provider>
        </>

    )
}
export {MyContext, MyProvider}
import React, { useEffect,useContext} from 'react'
import { Button } from 'semantic-ui-react'
import {MyContext} from './context/index'

const Login = () => {
    const context = useContext(MyContext);

    //initialize MySky
    useEffect(() => {
        async function initMySky() {
            try {
                const mySky = await context.client.loadMySky(context.portal);
                console.log(mySky)
                
                const loggedIn = await mySky.checkLogin();
                context.setMySky(mySky);
                context.setLoggedIn(loggedIn);
                
                if (loggedIn) {
                    context.setUserID(await mySky.userID());
                }
            } catch (e) {
                    console.error(`error with initial MySky: ${e.message}`);
            }
        } 
        initMySky();
      
        }, [context]);
    
    //Popup window for users to signin and signout
    const handleMySkyLogin = async () => {
        
        const status = await context.mySky.requestLoginAccess();
        context.setLoggedIn(status);
        
        if (status) {
            context.setUserID(await context.mySky.userID());
        }  
    }

    return (
        <>
            <div className='btn'>
                <Button className='btn-block' positive onClick={handleMySkyLogin}>Skynet Login</Button>
            </div>
        </>
        
    )
}

export default Login

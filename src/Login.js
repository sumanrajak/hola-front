import { Button } from '@material-ui/core';
import React from 'react';
import './App.css';
import Logo from './logo2.png';
import { auth,provider } from './firebase';

const Login = () => {

    const signin=()=> {
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            console.log("YOOOOO :: "+result.user.displayName +"  EMAIL  ::" +result.user.email);
            
            

        }).catch(error=> alert(error.message));
    }
    return (
        <div className="log_body">
                <img src={Logo} alt="Logo"  height="300px" width="300px"/> 
                <h1>SING IN TO HOLA</h1>
                <Button className="button" onClick={signin} variant="contained" color="primary" disableElevation="false">
                    Login with Google
                                    </Button>
            
        </div>
    )
}

export default Login

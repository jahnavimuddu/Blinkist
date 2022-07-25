import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { ButtonComponent } from "../atoms/Buttons/Buttons";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({
  hello:{
    color:"red",
  }
})


const LoginButton = () => {
  let styles=useStyles()
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    
    <React.Fragment>
     
    {!isAuthenticated &&
    
    <div style={{"textAlign":"center"}}>
      <h1 style={{"textAlign":"center"}}>Blinkist-App</h1>
      <ButtonComponent variant='contained' color='primary' onClick={() => loginWithRedirect()}>Log In</ButtonComponent>
      {/* <ButtonComponent className={styles.hello} variant={'contained'}>hello</ButtonComponent> */}
    </div>
    }</React.Fragment>
)
    }

export default LoginButton;
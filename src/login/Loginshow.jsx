import React from "react";
import { Button } from "react-bootstrap";
import Login from "./Login";
function Loginshow(){
    const [showLogin, setLoginshow] = React.useState([false]);
  
    return (
      <>
        <Button onClick={() => setLoginshow(true)}>
          Launch vertically centered modal
        </Button>

        <Login
          show={showLogin}
          onHide={() => setLoginshow(false)}
        />
      </>
    );
  }
  export default Loginshow;
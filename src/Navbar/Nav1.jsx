
import React from 'react';
import Login from '../login/Login';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

  
function Nav1(){
  const [Showlogin, setLoginshow] = React.useState([false]);
  return (
    <>
      <Nav>
        <Bars/>
  
        
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          <NavMenu>
          <NavLink to='/' activeStyle>
            <img className="logo" src="./img/logo.png"/>
          </NavLink>
          </NavMenu>
{/*           
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About Us
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/package' activeStyle>
             Our Package
          </NavLink>
          <NavLink to='/policies' activeStyle>
          Policies
          </NavLink>
          <NavLink to='/Contact' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/pay' activeStyle>
            Help & Support
          </NavLink>
          <NavLink activeStyle>
          <input  type="button" onClick={() => setLoginshow(true)} value=" SPEAK WITH A SPECIALIST " />
          <Login
          show={Showlogin}
          onHide={() => setLoginshow(false)}
        />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Nav1;
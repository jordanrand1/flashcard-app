import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
position: relative;
vertical-align: middle;
line-height: 1;
text-decoration: none;
-webkit-tap-highlight-color: transparent;
-webkit-box-flex: 0;
flex: 0 0 auto;
padding: .92857143em 1.14285714em;
text-transform: none;
font-weight: 400;
background: 0 0;
color: rgba(255,255,255,.9);
`

const Navbar = () => (
    <Menu inverted fixed='top'>
      <NavItem to='/'>
        Home
      </NavItem>
      <NavItem to='/create'>
        Create
      </NavItem>
      <Menu.Menu position='right'>
        <NavItem to='/login'>
          Login
        </NavItem>
      </Menu.Menu>
    </Menu>
)

export default Navbar;
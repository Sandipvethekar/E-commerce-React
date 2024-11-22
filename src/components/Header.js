import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './Nav'
const Header = () => {
    return (
        <MainHeader className="header">
            <NavLink to="/">
               
              <h2>S-STORE</h2>
            </NavLink>
            <Nav/>
        </MainHeader>
    )
}
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  background-color: rgb(246, 248, 250);
  margin:100px

  .logo {
    height: 5rem;
  }
   
`;

export default Header
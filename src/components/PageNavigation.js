import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

function PageNavigation({title}) {
  return <Wrapper>
         <NavLink to="/">
            Home/
         </NavLink>{title}
  </Wrapper>
}
const Wrapper=styled.section`

`;
export default PageNavigation
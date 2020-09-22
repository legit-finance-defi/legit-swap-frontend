import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bull from '../../assets/img/LegitLogo.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={bull} height="88" style={{ marginTop: 8 }} />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
`

export default Logo

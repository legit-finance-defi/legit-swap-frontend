import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="#"
      >
        MasterChef Contract
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="#">
        Twitter
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  &:hover {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Nav

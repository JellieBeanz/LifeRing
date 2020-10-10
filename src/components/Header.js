import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  background: #fff;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    position: sticky;
    top: 0;
  }

  @media screen and (min-width: 1000px) {
    padding: 0 calc((100vw - 1000px + 2rem) / 2);
  }
`

const Nav = styled.nav`
  display: flex;
`

const Logo = styled(Link)`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
`

const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0.4rem;
  transition: background 800ms ease;
  background: var(--primary-color);
  color: #fff;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #fff;
    background: var(--secondary-color);
  }

  :last-child {
    margin-right: 0;
  }
`

const HeaderComponent = () => (
  <Header>
    <Logo to="/">
      <span>CryptoFlow</span>
    </Logo>

    <Nav>
      <NavLink to="/">Marketplace</NavLink>
      <NavLink to="/connect-wallet">Wallet</NavLink>
    </Nav>
  </Header>
)

export default HeaderComponent

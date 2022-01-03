import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections </NavLink>
        </DesktopNav>
        <MobileNav>
          <ShoppingCartIcon>
            <Icon id='shopping-bag' />
            <VisuallyHidden>
              Shopping Cart
            </VisuallyHidden>
          </ShoppingCartIcon>
          <UnstyledButton>
            <Icon id='search' />
            <VisuallyHidden>
              Search items
            </VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id='menu' />
            <VisuallyHidden>
              menu
            </VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[700]};
    padding: 20px 16px;
    justify-content: space-between;
    align-items: center;
  }
  `;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: flex;
    gap: 18px;
  }
`;

const ShoppingCartIcon = styled(UnstyledButton)`
  transform: translateX(-2px);
`

const LogoWrapper = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tabletAndSmaller}{
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${p => p.theme.queries.tabletAndSmaller} {
    display: none;
  }
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;

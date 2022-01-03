/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <DialogOverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContentWrapper aria-label='Menu'>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>
            Dismiss menu
          </VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <NavContent>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavContent>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </DialogContentWrapper>
    </DialogOverlayWrapper>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  background-color: hsla(0, 100%, 0%, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`

const DialogContentWrapper = styled(DialogContent)`
  flex: 0 0 300px;
  height: 100%;
  background: hsla(0, 100%, 100%, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 32px 22px;
`

const NavContent = styled('nav')`
display: flex;
flex-direction: column;
gap: 22px;
padding: 32px;
  a {
    font-size: ${p => p.theme.fontSize[18]};
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    color: black;
    
    &:active, :hover, :focus {
      color: ${p => p.theme.palette.secondary};
    }
  }
`

const Footer = styled('footer')`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 22px;

  a {
    font-size: ${p => p.theme.fontSize[14]};
    font-weight: 500;
    text-decoration: none;
    color: black;

    &:active, :hover, :focus {
      color: ${p => p.theme.palette.secondary};
    }
  }
`

export default MobileMenu;

import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuItem from './MenuItem';

interface MenuProps {
  onClose: (e: React.MouseEvent) => void;
  onLogout: () => void;
  visible: boolean;
}

const Menu: React.FC<MenuProps> = ({ onClose, onLogout, visible }) => {
  if (!visible) return null;

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <MenuContainer onClick={onClose}>
        <div className="menu-wrapper">
          <MenuItem to={'/input'}>전표입력</MenuItem>
          <MenuItem to={'/cart'}>전표확인</MenuItem>
          <MenuItem to={'/front'}>프런트</MenuItem>

          <Split />

          <MenuItem onClick={onLogout}>로그아웃</MenuItem>
        </div>
      </MenuContainer>
    </OutsideClickHandler>
  );
};

export default Menu;

// Styles -> velog
const MenuContainer = styled.div`
  position: absolute;
  top: 100%;
  margin-top: 0.22rem;
  right: 0;
  > .menu-wrapper {
    position: relative;
    z-index: 5;
    width: 12rem;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Split = styled.hr`
  margin-left: 1rem;
  margin-right: 1rem;
`;

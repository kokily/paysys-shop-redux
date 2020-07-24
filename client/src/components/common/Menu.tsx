import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { useTransition, animated } from 'react-spring';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuItem from './MenuItem';
import { AuthResponse } from '../../libs/api/auth';
import { admin1, admin2, admin3, admin4 } from '../../libs/isAdmin';
import { shadow } from '../../libs/styles';

interface MenuProps {
  user: AuthResponse | null;
  onClose: (e: React.MouseEvent) => void;
  onLogout: () => void;
  visible: boolean;
}

const Menu: React.FC<MenuProps> = ({ user, onClose, onLogout, visible }) => {
  const transition = useTransition(visible, null, {
    from: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    enter: {
      opacity: 1,
      transform: 'scale(1)',
    },
    leave: {
      opacity: 0,
      transform: 'scale(0.5)',
    },
    config: {
      tension: 400,
      friction: 26,
    },
  });

  return (
    <>
      {transition.map(({ item, key, props }) =>
        item ? (
          <OutsideClickHandler onOutsideClick={onClose} key={key}>
            <MenuContainer onClick={onClose} style={props}>
              <div className="menu-wrapper">
                <MenuItem to={'/soldier'}>전표입력</MenuItem>
                <MenuItem to={'/cart'}>전표확인</MenuItem>
                <MenuItem to={'/front'}>프런트</MenuItem>

                {user &&
                  (user.username === admin1 ||
                    user.username === admin2 ||
                    user.username === admin3 ||
                    user.username === admin4) && (
                    <>
                      <Split />
                      <MenuItem to={'/wedding'}>웨딩빌지</MenuItem>
                      <MenuItem to={'/items'}>품목리스트</MenuItem>

                      <Split />
                      <MenuItem to={'/users'}>사용자 목록</MenuItem>
                    </>
                  )}

                <Split />

                <MenuItem onClick={onLogout}>로그아웃</MenuItem>
              </div>
            </MenuContainer>
          </OutsideClickHandler>
        ) : null
      )}
    </>
  );
};

export default Menu;

// Styles -> velog
const MenuContainer = styled(animated.div)`
  position: absolute;
  top: 100%;
  margin-top: 0.22rem;
  right: 0;
  ${shadow(5)};
  > .menu-wrapper {
    position: relative;
    z-index: 5;
    width: 12rem;
    background: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Split = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  height: 2px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.cyan[5]});
`;

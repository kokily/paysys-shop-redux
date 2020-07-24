import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../libs/modules/user';
import { RootState } from '../../libs/modules';
import Header from '../../components/common/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user.user);

  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!user || !user._id) {
      history.push('/');
    }
  }, [history, user]);

  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;

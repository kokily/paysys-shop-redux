import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../libs/modules';
import { admin1, admin2, admin3, admin4 } from '../../libs/isAdmin';

const AdminRedirectContainer = () => {
  const history = useHistory();
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  useEffect(() => {
    if (!user) {
      history.push('/');
    }

    if (
      user &&
      user.username !== admin1 &&
      user.username !== admin2 &&
      user.username !== admin3 &&
      user.username !== admin4
    ) {
      history.push('/');
    }
  }, [history, user]);

  return <></>;
};

export default AdminRedirectContainer;

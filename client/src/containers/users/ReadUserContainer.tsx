import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { readUser } from '../../libs/modules/users';
import { removeUser } from '../../libs/api/users';
import { RootState } from '../../libs/modules';
import ReadUser from '../../components/users/ReadUser';
import UserButton from '../../components/users/UserButton';
import { admin1 } from '../../libs/isAdmin';

const ReadUserContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { userId } = useParams();
  const { userProfile, error, loading, user } = useSelector(
    ({ users, loading, user }: RootState) => ({
      userProfile: users.user,
      error: users.error,
      loading: loading['users/READ_USER'],
      user: user.user,
    })
  );

  const onRemove = async () => {
    try {
      if (userId) {
        await removeUser(userId);
        history.push('/users');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onList = () => {
    history.push('/users');
  };

  useEffect(() => {
    if (userId) {
      dispatch(readUser(userId));
    }
  }, [dispatch, userId]);

  return (
    <ReadUser
      userProfile={userProfile}
      error={error}
      loading={loading}
      UserButton={
        user && user.username === admin1 ? (
          <UserButton onBack={onList} onRemove={onRemove} />
        ) : null
      }
    />
  );
};

export default ReadUserContainer;

import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initialize, changeField, login } from '../../libs/modules/auth';
import { check } from '../../libs/modules/user';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../libs/modules';

const LoginContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { username, password, auth, authError, user } = useSelector(
    ({ auth, user }: RootState) => ({
      username: auth.username,
      password: auth.password,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
    })
  );
  const [error, setError] = useState('');

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value }: { name: string; value: string } = e.target;
      dispatch(changeField({ key: name, value }));
    },
    [dispatch]
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(
      initialize({
        username: '',
        password: '',
        passwordConfirm: '',
        auth: null,
        authError: null,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('에러 발생!!');
      console.log(authError);
      setError('로그인 실패');
      return;
    }

    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/soldier');
    }

    try {
      localStorage.setItem('__PAYSYS_AUTH_TOKEN__', JSON.stringify(user));
    } catch (err) {
      console.log('Localstorage is not working!');
    }
  }, [history, user]);

  return (
    <AuthForm
      mode="login"
      username={username}
      password={password}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginContainer;

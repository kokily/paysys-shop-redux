import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { initialize, changeField, register } from '../../libs/modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { RootState } from '../../libs/modules';

const RegisterContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { username, password, passwordConfirm, auth, authError } = useSelector(
    ({ auth }: RootState) => ({
      username: auth.username,
      password: auth.password,
      passwordConfirm: auth.passwordConfirm,
      auth: auth.auth,
      authError: auth.authError,
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

    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸 없이 입력해주세요!');
      return;
    }

    if (password !== passwordConfirm) {
      setError('비밀번호 확인이 일치하지 않습니다!');
      changeField({ key: password, value: '' });
      changeField({ key: passwordConfirm, value: '' });
      return;
    }

    dispatch(register({ username, password }));
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
      setError('사원등록 에러');
    }

    if (auth) {
      console.log('사원등록 성공');
      console.log(auth);
      history.push('/');
    }
  }, [auth, authError, history]);

  return (
    <AuthForm
      mode="register"
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterContainer;

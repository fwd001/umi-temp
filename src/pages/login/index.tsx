import { useUpdateEffect } from 'ahooks';
import { Button } from 'antd';
import React from 'react';
import { history, useModel } from 'umi';

const Page: React.FC = () => {
  const userStore = useModel('user');
  const login = () => {
    userStore.login();
  };
  useUpdateEffect(() => {
    if (userStore.user.isLogin) {
      history.replace('/');
    }
  }, [userStore.user.isLogin]);

  return (
    <>
      login
      <Button onClick={login}>登录</Button>
    </>
  );
};

export default Page;

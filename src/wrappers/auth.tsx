import { Navigate, Outlet, useModel } from 'umi';

export default () => {
  const { user } = useModel('user');
  if (user?.isLogin) {
    console.log('登录');
    return <Outlet />;
  } else {
    console.log('未登录');
    return <Navigate to="/login" />;
  }
};

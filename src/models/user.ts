import { useSessionStorageState } from 'ahooks';
import { useCallback } from 'react';

export default function Model() {
  const defaultValue = {
    username: 'username',
    isLogin: false,
  };
  const [user, setUser] = useSessionStorageState('user-store', {
    defaultValue: defaultValue,
  });
  const login = useCallback(() => {
    setUser({
      ...user,
      isLogin: true,
    });
  }, []);
  const logout = useCallback(() => {
    setUser({
      ...user,
      isLogin: false,
    });
  }, []);

  return { user: user, login, logout };
}

import { useSessionStorageState } from 'ahooks';
import { useCallback } from 'react';

const defaultValue = {
  username: 'username',
  isLogin: false,
};

export default function Model() {
  const [user, setUser] = useSessionStorageState('user-store', {
    defaultValue: defaultValue,
  });
  const login = useCallback(() => {
    setUser({
      ...user!,
      isLogin: true,
    });
  }, []);
  const logout = useCallback(() => {
    setUser({
      ...user!,
      isLogin: false,
    });
  }, []);

  return { user, login, logout };
}

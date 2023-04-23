import { useToggle } from 'ahooks';
import { useCallback } from 'react';

export default function Model() {
  const [collapsed, { toggle: toggleCollapsed }] = useToggle(false);

  const toggle = useCallback(() => toggleCollapsed(), []);

  return { collapsed, toggle };
}

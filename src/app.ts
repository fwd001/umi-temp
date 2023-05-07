import RootCom from '@/pages/rootCom';
import '@/styles/index.less';
import React from 'react';

// 挂载根组件
export function rootContainer(container: any) {
  return React.createElement(RootCom, null, container);
}

console.log('app.ts');

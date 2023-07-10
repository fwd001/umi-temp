import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { ReactNode } from 'react';

dayjs.locale('zh-cn');
dayjs.extend(duration);
dayjs.extend(relativeTime);
const RootCom: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#3d75f8',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default RootCom;

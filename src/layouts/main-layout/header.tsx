import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Dropdown, Layout } from 'antd';
import { history, useModel } from 'umi';
import './index.less';

const { Header } = Layout;

export default function Compo() {
  const userStore = useModel('user');
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <div>退出</div>,
      onClick: () => {
        userStore.logout();
        history.replace('/login');
      },
    },
  ];
  return (
    <Header className="header">
      <div className="logo" />
      <Dropdown menu={{ items }} placement="bottomLeft">
        <div className="user-wrap">
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
          <span className="c-#fff ml-12px">小二</span>
        </div>
      </Dropdown>
    </Header>
  );
}

import {
  AccountBookOutlined,
  HomeOutlined,
  ShopOutlined,
  ShoppingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { history, useLocation, useModel } from 'umi';

type MenuItem = Required<MenuProps>['items'][number];
const { Sider } = Layout;

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const menus: MenuProps['items'] = [
  getItem('首页', '/index', <HomeOutlined />),
  getItem('经营', '/operate', <AccountBookOutlined />),
  getItem('商城', '/mall', <ShoppingOutlined />),
  getItem('营业', '/business', <ShopOutlined />),
  getItem('我的', '/my', <UserOutlined />),
];

export default function Compo() {
  const location = useLocation();
  const { collapsed } = useModel('app');

  function onMenuSelect(item: { key: string }) {
    history.push(item.key);
  }

  const {
    token: { colorBgContainer: bg },
  } = theme.useToken();
  return (
    <Sider
      width={256}
      collapsed={collapsed}
      style={{ background: bg, overflow: 'auto' }}
    >
      <Menu
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        items={menus}
        onSelect={onMenuSelect}
      />
    </Sider>
  );
}

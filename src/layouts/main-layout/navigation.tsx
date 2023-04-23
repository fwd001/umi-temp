import {
  AccountBookOutlined,
  HomeOutlined,
  ShoppingOutlined,
  ShopOutlined,
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

// const menus: MenuProps['items'] = [
//   {
//     key: '/',
//     icon: <UserOutlined />,
//     label: 'index',
//   },
//   {
//     key: '/docs',
//     icon: <UserOutlined />,
//     label: 'docs',
//   },
//   {
//     key: '/about',
//     icon: <UserOutlined />,
//     label: 'about',
//   },
//   {
//     key: 'sub1',
//     icon: <DisconnectOutlined />,
//     label: 'group',
//     children: [
//       {
//         icon: <UserOutlined />,
//         label: 'products',
//         key: '/products',
//       },
//     ],
//   },
//   {
//     key: '/products1',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products2',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products3',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products4',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products5',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products6',
//     icon: <UserOutlined />,
//     label: 'products123123123123123123',
//   },
//   {
//     key: '/products7',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products8',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products9',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/products0',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/productsq',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/productswe',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/productse',
//     icon: <UserOutlined />,
//     label: 'products',
//   },
//   {
//     key: '/productsr',
//     icon: <UserOutlined />,
//     label: 'products22',
//   },
//   {
//     key: '/productst',
//     icon: <UserOutlined />,
//     label: 'products11',
//   },
// ];

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

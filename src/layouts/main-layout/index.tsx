import { Layout, theme } from 'antd';
import { Outlet } from 'umi';
import Header from './header';
import './index.less';
import Navigation from './navigation';

const { Content } = Layout;

export default function LayoutIndex() {
  const {
    token: { colorBgContainer: bg },
  } = theme.useToken();
  return (
    <Layout className="layout-wrap">
      <Header></Header>
      <Layout>
        <Navigation></Navigation>
        <Layout style={{ padding: '24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: bg,
              overflow: 'auto',
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

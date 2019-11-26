import React from 'react';
// import classNames from 'classnames';

import {
  Layout,
  Breadcrumb,
  Row,
  Col
} from 'antd';

import HeaderView from './HeaderView';
import RouteWithSubRoutes from "../routers/routewithsubroutes"

const { Content, Footer } = Layout;

export default class BasicLayout extends React.Component {
    render() {
      const { routes } = this.props;
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <HeaderView/>
          <Content>
            <div className="container">
              {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))}
            </div>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      )
    }
}
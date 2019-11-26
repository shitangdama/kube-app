import React from 'react';

import { Layout, message, Row, Col, Menu } from 'antd';
import styles from './HeaderView.module.less'

const { Header } = Layout;

export default class HeaderView extends React.Component {

  state = {
    current: 'info',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };


  render() {
    return (
      <Header className={styles.fixedHeader}>
        <div className="container">
          <div className="logo" />
          <Menu

          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          theme="light"
          mode="horizontal"
          style={{ lineHeight: '64px' }}
          >
          <Menu.Item key="info">info</Menu.Item>
          <Menu.Item key="helm">helm</Menu.Item>
          <Menu.Item key="deployment">deployment</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}
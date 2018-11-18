import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import {PropTypes} from 'prop-types';
import './../../../css/layout.css';

const { Header, Sider, Content } = Layout;

class UserLayout extends React.Component {

  constructor(props){
    super(props);
  }

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  handleMenuClick = (url) => {
    this.context.router.history.push(url);
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" >
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" >
              <Icon type="user" />
              <span>Profile</span>
            </Menu.Item>
            <Menu.Item key="2" >
              <Icon type="clock-circle" />
              <span>Timesheet</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

UserLayout.propTypes = {
  children: PropTypes.object,   
};
UserLayout.contextTypes = {
  router: PropTypes.object,
};

export default withRouter(UserLayout);
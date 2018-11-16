import React from 'react';
import { Layout} from 'antd';
import PropTypes from 'prop-types';
const { Header, Footer, Content } = Layout;

class LoginLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            
    <Layout>
            <Header style={{float: 'left', backgroundColor: 'rgba(121, 122, 212, 0.85)'}}>
            <h1>Timesheet</h1>
            </Header>
            <Content>
                {this.props.children}
            </Content>
    <Footer style={{ textAlign: 'center' }}>
      Timesheet ©2018 Created by Galo
    </Footer>
  </Layout>
            
            
        );
    }
}

LoginLayout.propTypes = {
    children: PropTypes.object,
};
export default LoginLayout;
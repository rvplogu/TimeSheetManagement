import React from 'react';
import LoginForm from '../component/LoginForm';
import RegistrationForm from '../component/RegisterForm';
import { Layout} from 'antd';

const { Content, Footer } = Layout;

const styles ={
    body:{
        display: 'flex',
        flexDirection: 'column',
        float: 'right',
    }
};
class LoginPage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            
            <Layout>
            <Content>
            <div style={styles.body}>
            <LoginForm/>
            <RegistrationForm/>
            </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Timesheet ©2018 Created by Galo
    </Footer>
  </Layout>
            
            
        )
    }
}
export default LoginPage;
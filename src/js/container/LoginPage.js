import React from 'react';
import LoginForm from '../component/LoginForm';
import RegistrationForm from '../component/RegisterForm';
import LoginLayout from '../component/common/LoginLayout';
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
      <LoginLayout>
        <div style={styles.body}>
        <LoginForm/>
        <RegistrationForm/>
       </div>
      </LoginLayout>
    );
  }
}
export default LoginPage;
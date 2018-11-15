import React from 'react';
import LoginForm from '../component/LoginForm';
import RegistrationForm from '../component/RegisterForm';

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
            <div style={styles.body}>
            <LoginForm/>
            <RegistrationForm/>
            </div>
        )
    }
}
export default LoginPage;
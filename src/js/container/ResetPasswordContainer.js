import React from 'react';
import UserLayout from '../component/common/UserLayout';
import { Form, Icon, Input, Button } from 'antd';
import '../../css/reset.css';
import { PropTypes} from 'prop-types';

const FormItem = Form.Item;

class ResetPasswordForm extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return(<UserLayout>
            <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your old password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Old Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your New Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="New Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your New Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            reset
          </Button>
        </FormItem>
      </Form>
        </UserLayout>);
    }
}

const ResetPasswordContainer = Form.create()(ResetPasswordForm);

ResetPasswordContainer.propTypes = {
    form: PropTypes.object,
};

export default ResetPasswordContainer;
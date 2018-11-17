import React from 'react';
import UserLayout from '../component/common/UserLayout';
import { Card, Col, Row } from 'antd';
import info  from './../constant/profileInfo';

const styles = {
    key: {
        color: '#9199a1',
        fontSize: 14,
    },
    value: {
        paddingLeft: 8
    }
};
class ProfilePageContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return(
            <UserLayout>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16}>
      <Col span={10}>
        <Card title="User Information">
        <table>
        {info.list.map((value) => (
        <tr>
            <td style={styles.key}>{value.displayName}</td>
            <td style={styles.value}>:</td>
            <td style={styles.value}>{value.value}</td>
        </tr>))
        }
        </table>
        </Card>
      </Col>
      <Col span={14}>
        <Card title="Leave details">
        <table>
        {info.detail.map((value) => (
        <tr>
            <td style={styles.key}>{value.displayName}</td>
            <td style={styles.value}>:</td>
            <td style={styles.value}>{value.value}</td>
        </tr>))
        }
        </table>
        </Card>
      </Col>
    </Row>
    </div>
            </UserLayout>
        );
    }
}
export default ProfilePageContainer;
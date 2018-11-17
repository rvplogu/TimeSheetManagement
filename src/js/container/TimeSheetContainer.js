import React from 'react';
import UserLayout from '../component/common/UserLayout';
import FilterBar from '../component/common/FilterBar';
import { Table } from 'antd';
const monthDays = require('month-days');

const preColumns = [
    { title: 'Types of Billing', dataIndex: 'name', key: 'name', fixed: 'left', width:100 },
    { title: 'Domain', dataIndex: 'age', key: 'age', fixed: 'left', width:100 },
    { title: 'Roles', dataIndex: 'roles', key: 'roles', fixed: 'left', width:100 },
    { title: 'Activity', dataIndex: 'activity', key: 'activity', fixed: 'left', width:100 }
  ];
const postColumns = [{
    title: 'remarks',
    key: 'operation',
    fixed: 'right',
    width:100,
    render: () => <a href="javascript:;">action</a>,
  }];

class TimeSheetContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        
        const days = monthDays(7, 2018);

        const dayColumn = [];
        for(var i=1; i<= days; i++){
            dayColumn.push({   
            title: i.toString() , width: 150, dataIndex: i.toString() , key: i.toString(),
           });
        }
        const columns = [...preColumns,...dayColumn,...postColumns];
        console.log(columns);
        return (
            <UserLayout>
            <FilterBar />
            <div>
            <Table columns={columns} />
            </div>
            </UserLayout>
        );
    }
}
export default TimeSheetContainer;
import React from 'react';
import UserLayout from '../component/common/UserLayout';
import FilterBar from '../component/common/FilterBar';
import { Table } from 'antd';
import { Days, sampleJSONData } from '../constant/Utils';
import '../../css/table.css';
const monthDays = require('month-days');

const preColumns = [
    { title: 'Types of Billing', dataIndex: 'name', key: 'name', fixed: 'left', width:100, 
    render : (value, row, index) => renderValue(value, row, index)},
    { title: 'Domain', dataIndex: 'age', key: 'age', fixed: 'left', width:100 },
    { title: 'Roles', dataIndex: 'roles', key: 'roles', fixed: 'left', width:100 },
    { title: 'Activity', dataIndex: 'activity', key: 'activity', fixed: 'left', width:100,
    render : (value, row, index) => renderRoles(value, row, index) }
  ];
const postColumns = [{
    title: 'remarks',
    key: 'operation',
    fixed: 'right',
    width:100
  }];
function renderValue(value, row, index){
    const object =  {
        children: value,
        props: {},
    };
    if (index === 0) {
        object.props.rowSpan = 3;
      }else{
        object.props.rowSpan = 0;
      }
    return object;
}
function renderRoles(value, row, index){
    const object =  {
        children: value,
        props: {},
    };
    if (index === 3) {
        object.props.colSpan = 2;
      }else if(index >3){
        object.props.colSpan = 0;
      }
    return object;
}
class TimeSheetContainer extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        console.log(sampleJSONData)
        
        const days = monthDays(7, 2018);

        const dayColumn = [];
        let dayCount = 1;
        for(var i=1; i<= days; i++){
            dayColumn.push(
                {
                    title: i.toString(),
                    className: 'daystyle',
                    children: [   
                {   
                    title: Days[dayCount], width: 80, dataIndex: i.toString() , key: i.toString(),
                    className: 'daystyle'
                }]}
            );
            if(dayCount === 7){
                dayCount =1;
            } else{
                dayCount++;
            }
        }
        const columns = [...preColumns,...dayColumn,...postColumns];

        return (
            <UserLayout>
            <FilterBar />
            <div style={{padding: '16px 0px'}}>
            <Table 
            columns={columns} 
            dataSource={sampleJSONData} 
            bordered  
            scroll={{ x: 3005 }}
            pagination={false}
            />
            </div>
            </UserLayout>
        );
    }
}
export default TimeSheetContainer;
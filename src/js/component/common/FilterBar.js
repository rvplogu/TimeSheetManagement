import React from 'react';
import { Select } from 'antd';
import { Month, Year } from '../../constant/Utils';
const Option = Select.Option;

class FilterBar extends React.Component {

    constructor(props){
       super(props);
    }

    
    render() {
        return (
            <div>
                <span> Year : </span>
            <Select
                showSearch
                style={{ width: 140 }}
                placeholder="Select Year"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
             >
             {Year.map((value) => (
                <Option value={value}>{value}</Option>
             ))}
  </Select>
            <span style={{paddingLeft: 24}}> Month : </span>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select Month"
                optionFilterProp="children"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
             >
             {Object.keys(Month).map((value) => (
                <Option value={value}>{Month[value]}</Option>
             ))}
  </Select>
  
  </div>
  
        );
    }
}
export default FilterBar;
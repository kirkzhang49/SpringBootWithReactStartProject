import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                      {
                          this.props.employees.map(emp=>
                          <Employee key={emp.id}
                          employee={emp} />)
                        }
                </tbody>
            </table>    
        )
    }
}
export default EmployeeList;
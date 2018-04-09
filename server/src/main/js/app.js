const React = require('react');
const ReactDom = require('react-dom');
//const client = require('./client');

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {employees:[]};
    }

    componentDidMount(){
        client({method:'GET',path:'/api/employees'}).done(response=>{
            this.setState({employees:response.entity._embedded.employees})
        });
    }
    render(){
        return(
            <EmployeeList employees={this.state.employees}/>
        )
    }
}
//end of app[] 

class EmployeeList extends React.Component{
    render(){
        var employees = this.props.employees.map(employee=>
        <Employee key={employee._links.self.href}
        employee={employee}/>);
        return (
            <table>
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                    </tr>
                    {employees}
                </tbody>
            </table>    
        )
    }
}
//end of EmployeeList []

class Employee extends React.Component{
    render(){
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}
//end of Employee []
ReactDom.render(
    <App />,document.getElementById('react');
)
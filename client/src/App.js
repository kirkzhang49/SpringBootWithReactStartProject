import React, { Component } from 'react';
import EmployeeList from './components/employeeFold/EmployeeList';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
          employees:[],
          isLoading:true
        };
    }

  componentDidMount(){
    this.setState({isLoading:true})
    fetch("http://localhost:8090/myemployee")
    .then(response=> {
      return response.json()
    })
    .then((data)=>{
      this.setState({employees:data,isLoading:false})
    }
    );
  }
  render() {
    if(this.state.isLoading){
      return <p>Loading....</p>;
    }
     else {  
      return (
   <EmployeeList employees={this.state.employees} isLoading={this.state.isLoading}/>
        )
     }
 
  }
}

export default App;

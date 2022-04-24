import React,{Component} from 'react';
import Card from './Card';
import './index.css'

class App extends Component{
  constructor(){
    super();
    this.state = { 
      user : [],
      flag : '0'
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(users => this.setState({user : users.data, flag : '1' }));
  }
  render(){
    const {user,flag} = this.state;
    return(
      (flag === '1') ? user.map((elem) =>
        <Card key={elem.id} avatar={elem.avatar} first_name={elem.first_name} last_name={elem.last_name} email={elem.email}/>
      ) :  <div className='lds-hourglass'></div>
    );
  }
}

export default App;

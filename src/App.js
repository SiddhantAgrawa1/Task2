import React,{Component} from 'react';
import Card from './Card';
import './index.css'

class App extends Component{
  constructor(){
    super();
    this.state = { 
      user : [],
      flag : '0',
      flag1 : '0'
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(users => this.setState({user : users.data, flag : '1' }));
  }
  handleEvent(){
    this.setState({flag1:'1'})
  }
  fetching(){
    const {user,flag,flag1} = this.state;
    return (
      (flag === '1' && flag1 === '1') ? user.map((elem) =>
      <Card key={elem.id} avatar={elem.avatar} first_name={elem.first_name} last_name={elem.last_name} email={elem.email}/>
      ) :  <div className='lds-hourglass'></div>
    )
  }
  render(){
    return(
      <div>
        <nav>
          <p>Lets Upgrade</p>
          <button onClick={() => this.handleEvent()}>Click Me!</button>
        </nav>
        <h1 id='heading'>Our Patners</h1>
        <div id='cards'>
          {this.fetching()}
        </div>
      </div>
    );
  }
}

export default App;
